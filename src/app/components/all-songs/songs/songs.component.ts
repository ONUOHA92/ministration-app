import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User, UserList } from 'src/app/shared/models/auth.models';
import { Access, AuthenticationService, Control } from 'src/app/shared/services/auth.service';
import { PathService } from 'src/app/shared/services/path.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { UserService } from 'src/app/shared/services/users/user.service';
import { SongService } from 'src/app/shared/services/web/songs.service';
import { Songs } from '../../pages/pages/editor/model/pages.model';

@Component({
  selector: 'app-access',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongComponent implements OnInit {

  public users: Array<UserList> = new Array<UserList>();

  public newUser: User = new User();
  songs: any[] = [];
  @Input() lyricsData: string = '';

  public page = 1
  public config: any = {
    currentPage: 1,
    pageSize: 6,
    maxSize: 5
  };


  searchTerm: string = '';
  filteredSongs: any[] = [];

  constructor(
    private modalService: NgbModal,
    private authService: AuthenticationService,
    private userService: UserService,
    private pathService: PathService,
    private requestService: RequestService,
    private songService: SongService,
    private toastr: ToastrService,
  ) {
    this.filteredSongs = this.songs;
  }



  search() {
    this.filteredSongs = this.songs.filter(song =>
      song.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      song.intro.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }





  ngOnInit(): void {

    // this.load()
    this.gitAllUserSongs()
  }



  save(data) {

    let $this = this;

    let payload: any = {}
    payload.data = data
    payload.user_id = this.selected_user;

    console.log("Checker0--->>>", payload)

    this.requestService._post(this.pathService.LIST_PRIVILEGES, payload, function (result, status) {

      if (status) {
        $this.toastr.success("Privilege successfully added")
        return;
      }
      $this.toastr.error("Privilege failed to add")

    })
  }

  Select2Open(select2modal) {
    this.modalService.open(select2modal);
  }

  // load() {

  //   let $this = this

  //   this.userService.all(function (result, status) {

  //     if (status) {
  //       $this.users = result
  //     }
  //   })
  // }


  pageChanged(event) {

    this.config.currentPage = event;
  }


  public selected_user: number;

  onEdit(data, priviledgeModel) {

    this.modalService.open(priviledgeModel);

    let $this = this;

    this.selected_user = data.id;

    this.requestService._get(this.pathService.LIST_PRIVILEGES + '/' + this.selected_user, function (result, status) {

      let access = $this.authService.parseAccess(result)

      // $this.setControl(access);
    })
  }

  openLyricsModal(data: Songs, selectLyricsmodal: any) {
    console.log(data, 'info')

    // if (lyrics) {
    this.lyricsData = data.lyrics;
    this.modalService.open(selectLyricsmodal, { size: 'lg' });

  }





  gitAllUserSongs() {
    this.songService.getAllMinistriesSongs().subscribe(
      (data: any) => {

        const songs = data.allSongs.map((songObj: any) => songObj.songs);
        this.songs = songs;
        this.filteredSongs = this.songs;

        console.log(this.filteredSongs, 'let see')
        // this.songs = data.allSongs; // Adjust if response structure is different
        // console.log(this.songs, ); // Process songs data here
        console.log(data.allSongs, 'see how e goes')
      },
      (error) => {
        console.error('Error fetching songs:', error);
        // Handle error here
      }
    )
  }

}
