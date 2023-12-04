import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';;
import { ActivatedRoute, Router } from '@angular/router';
import {
  ButtonsConfig, ButtonsStrategy, AdvancedLayout, GalleryService, Image, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE, KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_BTN_FULL_SCREEN, ButtonEvent, ButtonType, PlainGalleryConfig, PlainGalleryStrategy,
} from '@ks89/angular-modal-gallery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

import { TimeZone } from 'src/app/shared/data/pages/profile';
import { RequestService } from 'src/app/shared/services/request.service';
import { RouteService } from 'src/app/shared/services/route.service';
import { WebService } from 'src/app/shared/services/web/web.service';
import { SongService } from 'src/app/shared/services/web/songs.service';
import { BackupService } from 'src/app/shared/services/web/backup.service';
import { Block, Element, Group, Page } from './model/class-cms';
import { Blocks, Elements, Groups, Layout, Template, Levite, Songs } from './model/pages.model';
import { DateUtilService } from 'src/app/shared/services/utils.service';


@Component({
  selector: 'app-editor',
  templateUrl: './admin-min-editor.component.html',
  styleUrls: ['./admin-min-editor.component.scss']
})

export class AdminMinEditorComponent implements OnInit {

  public createSongForm: FormGroup;
  public createBackupFrom: FormGroup;
  public updateSongForm: FormGroup;
  public updateBackupForm: FormGroup;
  public submitted: boolean = false;

  // roles: string[] = ['usesr', 'admin'];
  backupNames: string[] = [];

  public template: Template; //= new Template();

  public layout: Array<Layout> = new Array<Layout>()

  public pages: Array<Template> = new Array<Template>()
  public songs: Array<Levite> = new Array<Levite>()
  public backup: Array<Levite> = new Array<Levite>()
  public song: Songs = new Songs();

  editData: any;
  editDataBackup: any
  @Input() lyricsData: string = '';

  purposeName: string;


  public showElement: boolean = false;

  timeZone = TimeZone
  elect2modal2: any;


  constructor(
    private galleryService: GalleryService,
    private routeService: RouteService,
    private webService: WebService,
    private songService: SongService,
    private backupService: BackupService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private utilService: DateUtilService,
    private requestService: RequestService,
    private formBuilder: FormBuilder,
  ) {


    console.log("Route Segment Check: ", this.routeService.segment(2))
    const ministeryId = this.routeService.segment(2)

    this.route.queryParams.subscribe(params => {
      this.purposeName = params['name'];
      // Use the 'name' value as needed in your component

    });



  }




  ngOnInit(): void {
    this.fetchBackupNames()
    this.loadPageSong()
    this.loadPageBackup()


    this.createSongForm = this.formBuilder.group({
      title: ['', Validators.required],
      lyrics: ['', Validators.required],
      lyricslink: [''],
      intro: [''],
      link: ['']
    });


    this.createBackupFrom = this.formBuilder.group({
      name: ['', Validators.required]
    })


    this.updateSongForm = this.formBuilder.group({
      title: ['', Validators.required],
      lyrics: ['', Validators.required],
      lyricslink: [''],
      link: [''],
      intro: ['']
    });

    this.updateBackupForm = this.formBuilder.group({
      name: ['', Validators.required],

    });


  }







  public GalleryImage: Image[] = [
    new Image(
      1,
      { //modal
        img: '../../assets/img/media/1.jpg',
        title: '',
      }
    )
  ]


  public config: any = {
    currentPage: 1,
    pageSize: 6,
    maxSize: 5
  };



  updateSubmit() {
    const ministryId = this.routeService.segment(2)
    const songId = this.editData._id.toString();


    let title = this.updateSongForm.controls['title'].value;
    let lyrics = this.updateSongForm.controls['lyrics'].value;
    let link = this.updateSongForm.controls['link'].value;
    let lyricslink = this.updateSongForm.controls['lyricslink'].value;
    let intro = this.updateSongForm.controls['intro'].value;


    // Now you can use these variables as needed
    const payload = {
      title,
      lyrics,
      link,
      lyricslink,
      intro
    }

    this.songService.updateSong(ministryId, payload, songId,).subscribe(
      response => {
        console.log('Song updated successfully', response);
        this.toastr.success('Song updated successfully');
        this.modalService.dismissAll();

        this.loadPageSong()
        // You may want to navigate to the song list or reload the updated song data here
      },
      error => {
        console.error('Error updating song', error);
      }
    )


  }


  updateBackupSubmit() {
    const ministryId = this.routeService.segment(2)
    const backupId = this.editDataBackup._id.toString();


    let name = this.updateBackupForm.controls['name'].value;

    // Now you can use these variables as needed
    const payload = {
      name
    }

    this.backupService.updateBackup(ministryId, payload, backupId,).subscribe(
      response => {
        console.log('Song updated successfully', response);
        this.toastr.success('BackUp updated successfully');
        this.modalService.dismissAll();

        this.loadPageBackup()
        // You may want to navigate to the song list or reload the updated song data here
      },
      error => {
        console.error('Error updating song', error);
      }
    )


  }


  public songsId: Songs

  addExistingSong(songId: Songs) {
    const ministryId = this.routeService.segment(2)
    this.songsId = songId

    this.songService.existingSong(ministryId, this.songsId).subscribe(
      (response) => {
        console.log('Song updated successfully', response);
        this.toastr.success(response.message);
        this.loadPageSong()
      },
      (error) => {
        console.error('Error adding song:', error);
        // Handle error response here
      }
    )


  }


  fetchBackupNames() {
    this.backupService.getUsers()
      .subscribe(
        (response: any) => {
          if (response && Array.isArray(response.users)) {
            this.backupNames = response.users.map((user: any) => user.first_name);
          } else {
            console.error('Invalid response structure or missing data');
          }
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      )
  }



  createSubmit() {
    const ministryId = this.routeService.segment(2)

    let $this = this;

    let title = this.createSongForm.controls['title'].value;
    let lyrics = this.createSongForm.controls['lyrics'].value;
    let lyricslink = this.createSongForm.controls['lyricslink'].value
    let link = this.createSongForm.controls['link'].value;
    let intro = this.createSongForm.controls['intro'].value;

    // Now you can use these variables as needed
    const payload = {
      title,
      lyrics,
      link,
      lyricslink,
      intro
    }



    this.songService.createSong(ministryId, payload).subscribe(
      response => {
        console.log('Song created successfully', response);
        $this.toastr.success("Song created successfully")

        // Reset the form after successful submission
        this.createSongForm.reset();

        this.modalService.dismissAll()
        this.loadPageSong()

      },
      error => {
        console.error('Error creating song', error);
      }
    )

  }


  createBackSubmit() {
    const ministryId = this.routeService.segment(2)
    let $this = this;
    let name = this.createBackupFrom.controls['name'].value;

    const payload = {
      name
    }
    this.backupService.createBackup(ministryId, payload).subscribe(
      response => {

        $this.toastr.success("Back up created successfully")

        // Reset the form after successful submission
        this.createBackupFrom.reset();

        this.modalService.dismissAll()
        this.loadPageBackup()
      },
      error => {
        console.error('Error creating song', error);
      }
    )
  }



  loadPageData() {

    let $this = this

    let body: any = { target: { uuid: this.route.snapshot.paramMap.get('index') } }

    this.webService.search(`template`, body).subscribe(response => {
      if (response.status == "success") {
        if (response.data.length > 0) {

          console.log("changes ------------", response)
          this.template = response.data[0]
        }
      }
    })

  }



  loadPageSong() {
    // Get the data_id parameter from the URL
    const dataId = this.routeService.segment(2)
    console.log(dataId, 'data id')

    if (dataId) {
      this.webService.getSongs(dataId)
        .subscribe(response => {
          if (response) {
            // Handle the songs data as needed   
            this.songs = response.songs;

          }
        }, error => {
          console.error(error);
        });
    } else {
      console.error('data._id parameter is not present in the URL');
    }
  }


  loadPageBackup() {
    const dataId = this.routeService.segment(2)
    console.log(dataId, 'data id')

    if (dataId) {
      this.webService.getbackup(dataId)
        .subscribe(response => {
          console.log(response, 'check for response')
          if (response) {
            // Handle the songs data as needed
            console.log(response.backup, 'check for response backup')
            this.backup = response.backup;
            // console.log("Songs associated with the data_id: ", this.songs);
          }
        }, error => {
          console.error(error);
        });
    } else {
      console.error('data._id parameter is not present in the URL');
    }

  }



  Select2Open(select2modal: any) {
    console.log(select2modal, 'check for the modal 2')
    this.modalService.open(select2modal);
  }

  SelectBackUpOpen(select2Backmodal: any) {
    this.modalService.open(select2Backmodal);
  }




  openLyricsModal(data: Songs, selectLyricsmodal: any) {
    console.log(data, 'info')

    // if (lyrics) {
    this.lyricsData = data.lyrics;
    this.modalService.open(selectLyricsmodal, { size: 'lg' });

  }



  Select2OpenEdit(select2modal2: any, data: any) {
    this.editData = data

    if (this.editData) {
      this.updateSongForm.patchValue({
        title: this.editData.title,
        intro: this.editData.intro,
        link: this.editData.link,
        lyricslink: this.editData.lyricslink,
        lyrics: this.editData.lyrics
      })
    }
    this.modalService.open(select2modal2);
  }

  Select2OpenEditBackUp(selectBackUp2modal: any, data: any) {
    this.editDataBackup = data

    if (this.editDataBackup) {
      this.updateBackupForm.patchValue({
        name: this.editDataBackup.name,

      })
    }
    this.modalService.open(selectBackUp2modal);
  }


  // loadSongs() {
  //   let $this = this;

  //   this.webService.all("all", function (result, status) {
  //     console.log(result, status);

  //     if (status) {
  //       console.log("Response data this is it:", result);

  //       $this.songs = result;
  //       console.log($this.songs, 'check it out')
  //     } else {
  //       console.error("Error fetching data");
  //     }
  //   });
  // }

  pageChanged(event: any) {

    this.config.currentPage = event;
  }

  page = 1

  loadLayouts() {

    let $this = this

    this.webService.all("layout", function (result: Layout[], status: any) {

      console.log(result, status)

      if (status) {
        $this.layout = result
      }

    })
  }

  // openImageModalRowDescription(image: Image) {
  //   const index: number = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
  //   this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  // }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  onButtonBeforeHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.DELETE) {
      this.GalleryImage = this.GalleryImage.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
  }

  onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.GalleryImage.length - 1);
      }, 0);
    }
  }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }
  }

  addRandomImage() {

    const imageToCopy: Image = this.GalleryImage[Math.floor(Math.random() * this.GalleryImage.length)];
    const newImage: Image = new Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    // this.GalleryImage = [...this.GalleryImage, newImage];
  }

  /**
   * BLOCK SECTION OF THE EDITOR
   */
  public block: Blocks = new Blocks()

  public blocks: Array<Blocks> = new Array<Blocks>()

  getBlocks(id: number) {

    this.showElement = false

    let body: any = {

      target: { template_id: id },
      total: 2
    }

    console.log('Block Response:: ', body, this.template)

    this.webService.search(`block`, body).subscribe(response => {

      console.log('Block Response:: ', response.data)

      if (response.status == "success") {
        this.blocks = response.data
      }

    })
  }

  addBlock(newBlock: any) {

    this.modalService.open(newBlock);
  }

  public new_Block: Blocks = new Blocks();

  onCreateBlock($event: Event) {

    let id: any = this.routeService.segment(2)

    this.new_Block.status = 1;

    this.new_Block.template_id = this.template.id

    this.webService.create(`block`, this.new_Block).subscribe(response => {

      if (response.status == "success") {

        if (response.data) {
          this.blocks = response.data
        }
        this.toastr.success("Request Successfully completed")
        this.modalService.dismissAll()
      }

    })


  }

  public onBlockSelected($event: number, type: any) {

    switch (type) {
      case "multiple": this.new_Block.multiple = $event; break;
      case "item_max": this.new_Block.item_max = $event; break;
    }
  }



  public _layout: string;
  public _parent: string
  public _header_position: string
  public _footer_position: string
  public _page_order: string


  onSelected($event: any, key: string | number) {
    let $key = {}
    $key[key] = $event
    this.onSave($key)
  }

  onSave($key: { value?: any; }) {

    if (!$key.value) {
      return;
    }

    let body: any = {}
    body.data = $key;
    body.target = { "id": this.template.id };

    console.log("Checking payload: ", body)

    this.webService.update(`template`, body).subscribe(response => {

      if (response.status == "success") {

      }

    }, (error) => { });
  }


  onInputUpdate($key: { value: any; name: any; }) {

    if (!$key.value || !$key.name) {
      return;
    }

    let key = $key.name;
    let value = $key.value

    let body: any = {}
    body.data = {}
    body.data[key] = value
    body.target = { "id": this.template.id };

    console.log("Checking payload: ", body)

    this.webService.update(`template`, body).subscribe(response => {

      if (response.status == "success") {

      }

    }, (error) => { });
  }


  /**
   * GROUPS SECTION OF THE EDITOR
   */

  /**
   * Store selected block ID
  */

  public selected_block: Block = new Block()

  public is_block_showing: boolean = false
  public group: Groups = new Groups()
  public groups: Array<Groups> = new Array<Groups>()

  getGroups(block: any) {

    this.selected_block = block;
    this.block = block

    this.showElement = true;

    console.log("Data value: ", this.selected_block)

    let body: any = {
      target: { block_id: this.block.id },
      total: 2
    }

    this.webService.search(`group`, body).subscribe(response => {

      if (response.status == "success") {
        this.groups = response.data
        this.is_block_showing = true
      }

      console.log("Data value: ", this.groups)

    }, (error) => {

    });
  }

  /**
   * 
   * @param newGroup 
   * @param blockid 
   * @returns 
   * 
   * This should trigger new window to open if the max item is less than 1
   * else create similar group for multiple group blocks
   */
  addGroup(newGroup: any, blockid: number) {

    this.new_Group.block_id = blockid;
    this.new_Group.status = 1;

    if (this.selected_block.item_max > 1) {

      this.new_Group.name = this.selected_block.block_name;
      this.onCreateGroup("")
      return
    }

    this.modalService.open(newGroup);
  }

  public new_Group: Groups = new Groups()
  onCreateGroup($event: string) {

    this.webService.create(`group`, this.new_Group).subscribe(response => {

      if (response.status == 'success') {

        this.selected_block.groups = response.data
        this.groups = response.data;
        this.toastr.success("Request Successfully completed")
        this.modalService.dismissAll()
        this.getGroups(this.selected_block)
      }
    })
  }

  /**
  * LAYOUT SECTION OF THE EDITOR
  */

  public nlayout: Layout = new Layout()
  public layouts: Array<Layout> = new Array<Layout>()

  getLayouts() {

    let $this = this

    this.webService.all(`layout`, function (result: Layout[], status: any) {

      console.log(result, status)

      if (status) {
        $this.layouts = result
      }

    })
  }


  /**
   * Element Create Section
   */
  public elementPayload: ElementPayload = new ElementPayload()
  public targetGroup: Group

  addElement(newElement: any, group_id: number) {

    this.elementPayload.group_id = group_id
    this.elementPayload.value = "-"
    this.modalService.open(newElement)
  }

  public element: Elements = new Elements();

  onCreateElement($event: Event) {

    this.webService.create('element', this.elementPayload).subscribe(response => {
      if (response.status == "success") {
        this.toastr.success("Request successfully Completed")
        this.getGroups(this.block)
        this.modalService.dismissAll()
      }
    })
  }

  elementEditor() {

  }

  onElementSelected($event: Event, type: string) {

    let value: any = $event;
    this.elementPayload.type = value
  }

  /** ------------------------On New Methods ------------------------ */

  onReceivedUpdate($event: Element) {

    console.log("Changes to app:", $event)

    if (!$event.group_id || !$event.value) {
      this.toastr.info("Request failed due to an invalid payload")
      return
    }
    /**
     * send request to server, server should look 
     * for the element in the group and update it 
     */
    const body: any = {}
    body.target = { uuid: $event.group_uuid }
    body.data = $event
    this.webService.update('group', body).subscribe(response => {
      if (response.status == "success") {

      }
      console.log("Response::", response)
    })

  }

  onReceivedDelete($event: Element) {

    console.log("Delete to app:", $event)

    if (!$event.group_id || !$event.value) {
      this.toastr.info("Request failed due to an invalid payload")
      return
    }

    /**
     * send request to server, server should look 
     * for the element in the group and update it 
     */
    const body: any = {}
    body.target = { uuid: $event.group_uuid }
    body.data = $event

    this.webService.postDelete('element', body).subscribe(response => {
      if (response.status == "success") {
        this.getGroups(this.block)
      }
      console.log("Response::", response)
    })
  }


  /** ------------------------delete ------------------------ */

  public changingValue: Subject<any> = new Subject();
  public songId: any
  public backupId: any
  // public ministryId: any
  onDelete(data: any, target: any) {
    this.songId = data
    // this.target = target

    this.changingValue.next({
      status: "warning",
      message: "Are you sure you want to do this?",
      // ministryId: this.ministryId // Add ministryId to the data you're passing
    })
  }




  delete($event: Event) {

    let $this = this
    let status: any = $event
    const ministryId = this.routeService.segment(2)

    if (status) {
      // send delete Request to server
      this.songService.deleteSong(ministryId, this.songId).subscribe((response => {
        $this.toastr.success("Request Successfully completed")

        this.loadPageSong()
      }))


    }
  }





  onDeleteBackup(data: any) {
    this.backupId = data
    console.log(this.backupId)

    this.changingValue.next({
      status: "warning",
      message: "Are you sure you want to do this?",
      // ministryId: this.ministryId // Add ministryId to the data you're passing
    })
  }


  backDelete($event: Event) {

    let $this = this
    let status: any = $event
    const ministryId = this.routeService.segment(2)

    if (status) {
      // send delete Request to server
      this.backupService.deleteBackup(ministryId, this.backupId).subscribe((response => {
        $this.toastr.success("Request Successfully completed")

        this.loadPageBackup()
      }))


    }
  }


  handleAlertChange(event: any) {
    this.delete(event);
    this.backDelete(event);
  }



  // delete($event: Event) {

  //   let $this = this
  //   let status: any = $event

  //   const ministryId = this.routeService.segment(2)
  //   console.log(ministryId, 'data id')

  //   if (status) {
  //     // send delete Request to server
  //     this.webService.deleteSong(ministryId, this.songId).subscribe(response => {
  //       console.log(response)
  //     })


  //   }
  // }


  public group_ids: any;
  getGroupIDs() {

    // this.group_ids = [];
    // this.selected_block.groups.forEach(group => {
    //   this.group_ids.push(group.id)
    // })
    // return this.group_ids;
  }
  /**
   * This is the event received from on delete element state
   * 
   * @param $event 
   */
  onReceiveElementInputState($event: any) {

    console.log("Response Received:: --->>>>>> ", $event)

    let $this = this

    let body: any = {
      target: { block_id: this.selected_block.id },
      total: 2
    }

    this.webService.search(`group`, body).subscribe(response => {

      console.log("Response Data for Groups:: onReceiveElementInputState --->>>> ", response, response.status, this.selected_block)

      if (response.status == 'success') {
        $this.selected_block.groups = $this.groups = response.data
        $this.is_block_showing = true
      }

    })

  }


  /**        --------------------- */

  onSelectChange($event: any, target: any) {

    let payload: any = {}
    switch (target) {
      case "page_order":
        payload = { name: 'page_order', value: $event }
        break;
      case "layout":
        payload = { name: 'layout_id', value: $event }
        break;
      case "footer_position":
        payload = { name: 'footer_position', value: $event }
        break;
      case "header_position":
        payload = { name: 'header_position', value: $event }
        break;
      case "parent":
        payload.parent = $event;
        break;
    }

    // send request to server
    // console.log("Checking Select Data", payload)
    this.onInputUpdate(payload)

  }

  glueUrl($event: number) {

    let pageArray = this.pages.filter(x => {
      return x.id == $event
    })
    if (pageArray.length > 0) {
      let page: Template = pageArray[0]

      let segments = this.template.url.split('/');
      let parent = this.utilService.convertToUrlFormat(page.title)
      if (segments.length >= 1) {
        segments[0] = parent
      } else {
        segments.unshift(parent)
      }
      let url = '/' + segments.join('/')
      this.template.url = url
    }

    return this.template.url
  }

  public selectedParent: Template = new Template()

  onDataModelChange($event: { name: string; value: string; }) {
    // console.log("onDataModelChange", $event)
    if ($event.name == "title") {
      let url = this.utilService.convertToUrlFormat($event.value)
      this.template.url = `/${url}`
      this.template.title = $event.value
    }
  }

}


class ElementPayload {
  type: string
  name: string
  value: string
  status: number = 1
  group_id: number
}
