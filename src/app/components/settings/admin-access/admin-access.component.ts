import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User, UserList } from 'src/app/shared/models/auth.models';
import { Access, AuthenticationService, Control } from 'src/app/shared/services/auth.service';
import { PathService } from 'src/app/shared/services/path.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { UserService } from 'src/app/shared/services/users/user.service';
import { SongService } from 'src/app/shared/services/web/songs.service';
import { Levite } from '../../website/blogs/model/blog.model';

@Component({
  selector: 'app-access',
  templateUrl: './admin-access.component.html',
  styleUrls: ['./admin-access.component.scss']
})
export class AdminAccessComponent implements OnInit {

  public users: Array<UserList> = new Array<UserList>();
  public ministriesList: Array<Levite> = new Array<Levite>()

  public newUser: User = new User();

  public page = 1
  public config: any = {
    currentPage: 1,
    pageSize: 6,
    maxSize: 5
  };

  constructor(
    private modalService: NgbModal,
    private authService: AuthenticationService,
    private userService: UserService,
    private pathService: PathService,
    private songService: SongService,
    private requestService: RequestService,
    private toastr: ToastrService,
  ) {

  }

  public controls: Array<{}> = new Array<{}>()

  ngOnInit(): void {

    // this.load()
    this.getAllMinistries()

  }

  setControl(access) {

    this.controls = [];

    this.controls.push({ key: "chat", value: access.chat });
    this.controls.push({ key: "job", value: access.job });
    this.controls.push({ key: "assigned", value: access.assigned });
    this.controls.push({ key: "activity", value: access.activity });
    this.controls.push({ key: "calendar", value: access.calendar });
    this.controls.push({ key: "message", value: access.message });
    this.controls.push({ key: "report", value: access.report });
    this.controls.push({ key: "settings", value: access.settings });
    this.controls.push({ key: "website", value: access.website });

    console.log("Logger Access Check", access)

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


  getAllMinistries() {
    this.songService.allMin().subscribe(
      (response: any) => {
        console.log(response, 'check for ministry'); // Handle the response as needed
        // Assuming your response has a 'ministries' property
        this.ministriesList = response.ministries;
      },
      (error) => {
        console.error(error); // Handle errors
      }
    );
  }


  makeAdmin(userid: any) {
    const userId = userid

    let $this = this;

    this.songService.makeAdmin(userId).subscribe(
      response => {
        if (response)
          $this.toastr.success("you are now an admin")
        this.getAllMinistries()
      },

      error => console.error(error)
    );
  }
  deleteAdmin(userid: any) {
    const userId = userid

    let $this = this;

    this.songService.deleteAdmin(userId).subscribe(
      response => {
        if (response)
          $this.toastr.error("you have been removed as admin")
        this.getAllMinistries()
      },

      error => console.error(error)
    );
  }



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

      $this.setControl(access);
    })
  }

}
