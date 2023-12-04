import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { User, UserList } from 'src/app/shared/models/auth.models';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users/user.service';
import { WebService } from 'src/app/shared/services/web/web.service';
import { SongService } from 'src/app/shared/services/web/songs.service';
import { MinistryTypeService } from 'src/app/shared/services/web/minstrytype.service';
import { Layout, Template, Levite, MinistrationType } from './editor/model/pages.model';
import { DateUtilService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-pages',
  templateUrl: './create-ministration.component.html',
  styleUrls: ['./create-ministration.component.scss']
})
export class CreateMinstrationComponent implements OnInit {

  // public loginForm: FormGroup;
  // public submitted: boolean = false;

  public users: Array<UserList>;

  public newUser: User = new User();

  public template: Template = new Template();

  public levite: Levite = new Levite();

  public ministrationType: MinistrationType = new MinistrationType();

  public ministrationTypefetch: MinistrationType[] = [];

  public layout: Array<Layout> = new Array<Layout>()

  public songs: Array<Levite> = new Array<Levite>()

  public pages: Array<Template> = new Array<Template>()


  // selectedMinistrationType: { [key: string]: boolean } = {};
  selectedMinistrationType: string[] = [];
  selectedMinistrationService: string[] = [];

  // purpose = {
  //   names: ['Sunday Services', 'Special Services',], // Example options
  //   name: '' // Initially empty; will hold the selected option
  // };




  public config: any = {
    currentPage: 1,
    pageSize: 6,
    maxSize: 5
  };




  constructor(
    private modalService: NgbModal,
    private utilService: DateUtilService,
    private userService: UserService,
    private ministryTypeService: MinistryTypeService,
    private webService: WebService,
    private toastService: ToastrService,
    private songService: SongService,

  ) {

  }

  ngOnInit(): void {

    // this.load()
    // this.loadPages()
    this.loadSongs()
    this.fetchMinistryTypes()
  }




  // onSelectChange(selectedValue: string) {
  //   this.purpose.name = selectedValue; // Update the selected option 
  // }


  // onCheckboxChange(value: string) {
  //   const index = this.selectedMinistrationType.indexOf(value);

  //   if (index === -1) {
  //     // If not in the array, add it
  //     this.selectedMinistrationType.push(value);
  //   } else {
  //     // If already in the array, remove it
  //     this.selectedMinistrationType.splice(index, 1);
  //   }

  //   // Perform any other necessary actions based on the selected values
  // }



  Select2Open(select2modal) {
    this.modalService.open(select2modal);
  }

  // load() {

  //   let $this = this

  //   this.userService.all(function (result, status) {

  //     console.log(result, status)

  //     if (status) {
  //       $this.users = result
  //     }

  //   })
  // }

  // loadPages() {

  //   this.webService.list("template").subscribe(response => {
  //     if (response.status == 'success') {
  //       this.pages = response.data
  //       this.toastService.success("Request Successfully completed")
  //       this.modalService.dismissAll()
  //       console.log("Pages....", response, response.data, this.pages)
  //     }
  //   })
  // }




  // this is for ministration Type
  toggleSelection(event: any, type: string) {
    if (event.target.checked) {
      // If the checkbox is checked, add the type to the array
      this.selectedMinistrationType.push(type);
    } else {
      // If the checkbox is unchecked, remove the type from the array
      const index = this.selectedMinistrationType.indexOf(type);
      if (index !== -1) {
        this.selectedMinistrationType.splice(index, 1);
      }
    }
  }

  isSelected(type: string): boolean {
    return this.selectedMinistrationType.includes(type);
  }



  // this is to Ministration Service
  toggleSelectionService(event: any, type: string) {
    if (event.target.checked) {
      // If the checkbox is checked, add the type to the array
      this.selectedMinistrationService.push(type);
    } else {
      // If the checkbox is unchecked, remove the type from the array
      const index = this.selectedMinistrationService.indexOf(type);
      if (index !== -1) {
        this.selectedMinistrationService.splice(index, 1);
      }
    }
  }


  isSelectedService(type: string): boolean {
    return this.selectedMinistrationService.includes(type);
  }



  // this is coming from the selected page 

  onNgSelectChange(event: any): void {
    const selectedValue = event; // Retrieve the selected value
    console.log(selectedValue); // Do something with the selected value
    // Assign the selected value to your model or perform further actions as needed
    this.ministrationType.days = selectedValue;
  }
  onNgSelectChangeService(event: any): void {
    const selectedValue = event; // Retrieve the selected value
    console.log(selectedValue); // Do something with the selected value
    // Assign the selected value to your model or perform further actions as needed
    this.ministrationType.nameType = selectedValue;
  }






  loadSongs() {
    let $this = this;

    this.webService.all("all", function (result, status) {
      console.log(result, status);

      if (status) {
        console.log("Response data this is it:", result);

        $this.songs = result;
        console.log($this.songs, 'check it out')
      } else {
        console.error("Error fetching data");
      }
    });
  }







  onSubmit($vent: Event) {

    const payload = {
      nameType: this.ministrationType.nameType,
      days: this.ministrationType.days,
      minDateType: this.ministrationType.minDateType,
    }

    this.ministryTypeService.createMinistryType(payload).subscribe(
      (data) => {
        console.log(data, 'let see if the minstration is creating');
        this.toastService.success(data.message);
        this.modalService.dismissAll();

        this.fetchMinistryTypes()
        this.clearForm()
      },
      (error) => {
        console.log(error);
      }
    )

  }

  //Function to clear form controls
  clearForm() {
    this.ministrationType.days = '';
    this.ministrationType.nameType = ""
    this.ministrationType.minDateType = null
  }



  // to get MinistrationType
  fetchMinistryTypes(): void {
    this.ministryTypeService.getSingleMinistryTypes().subscribe(
      (data) => {
        // this.ministryTypes = data.ministryTypes; 
        console.log(data, 'see data coming in')
        this.ministrationTypefetch = data.ministryTypes

      },
      (error) => {
        console.error(error);
      }
    )
  }




  pageChanged(event) {

    this.config.currentPage = event;
  }

  page = 1


  onSelected($event: any, target: any) {

    switch (target) {
      case "page_order": this.template.page_order = $event; break;
      case "layout": this.template.layout_id = $event; break;
      case "footer_position": this.template.footer_position = $event; break;
      case "header_position": this.template.header_position = $event; break;
      case "parent":
        this.template.parent = $event;
        this.glueUrl($event)
        break;
    }

  }

  /** ------------------------delete ------------------------ */

  // public changingValue: Subject<any> = new Subject();
  // public selectedid
  // public target
  // onDelete(data: any, target: any) {

  //   this.selectedid = data
  //   this.target = target

  //   this.changingValue.next({ status: "warning", message: "Are you sure you want to do this?" })
  // }



  // delete($event: Event) {

  //   let $this = this
  //   let status: any = $event

  //   if (status) {
  //     // send delete Request to server
  //     this.webService.delete(this.target, this.selectedid, function (response, status) {

  //       if (status) {
  //         $this.load()
  //         $this.toastService.success("Request Successfully completed", "User record was deleted")
  //       }
  //     })
  //   }
  // }


  // public changingValue: Subject<any> = new Subject();
  // public selectedid
  // public target
  // onDelete(data: any, target: any) {

  //   this.selectedid = data
  //   this.target = target

  //   this.changingValue.next({ status: "warning", message: "Are you sure you want to do this?" })
  // }



  public changingValue: Subject<any> = new Subject();
  public selectedid
  public target
  onDelete(data: any, target: any) {

    this.selectedid = data
    this.target = target

    this.changingValue.next({ status: "warning", message: "Are you sure you want to do this?" })
  }


  delete($event: Event) {

    let $this = this
    let status: any = $event

    if (status) {
      // send delete Request to server
      this.songService.deleteMinistry(this.selectedid).subscribe((response => {

        // console.log(response.message, 'introduction')
        $this.toastService.success(response.message)

        this.loadSongs()
      }))


    }
  }




  glueUrl($event) {

    let pageArray = this.pages.filter(x => {
      return x.id == $event
    })
    if (pageArray.length > 0) {
      let page: Template = pageArray[0]

      let segments = this.template.url.split('/');
      let parent = this.utilService.convertToUrlFormat(page.title)
      if (segments.length > 1) {
        segments[0] = parent
      } else {
        segments.unshift(parent)
      }
      this.template.url = '/' + segments.join('/')
    }
  }

  public selectedParent: Template = new Template()

  onDataModelChange($event) {
    // console.log("onDataModelChange", $event)
    if ($event.name == "title") {
      let url = this.utilService.convertToUrlFormat($event.value)
      this.template.url = `/${url}`
      this.template.title = $event.value
    }
  }

}

