import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User, UserList } from 'src/app/shared/models/auth.models';
import { Access, AuthenticationService, Control } from 'src/app/shared/services/auth.service';
import { PathService } from 'src/app/shared/services/path.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { UserService } from 'src/app/shared/services/users/user.service';
import { BackupService } from 'src/app/shared/services/web/backup.service';
import { SongService } from 'src/app/shared/services/web/songs.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-access',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  public users: Array<User> = new Array<User>();

  public newUser: User = new User();

  searchTerm: string = '';
  filteredUsers: any[] = [];

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
    private requestService: RequestService,
    private backupService: BackupService,
    private songService: SongService,
    private toastr: ToastrService,
  ) {
    this.filteredUsers = this.users;
  }


  search() {
    this.filteredUsers = this.users.filter(user =>
      user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.last_name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  public controls: Array<{}> = new Array<{}>()

  ngOnInit(): void {

    // this.load()
    this.loadUsers()
  }

  // setControl(access) {

  //   this.controls = [];

  //   this.controls.push({ key: "chat", value: access.chat });
  //   this.controls.push({ key: "job", value: access.job });
  //   this.controls.push({ key: "assigned", value: access.assigned });
  //   this.controls.push({ key: "activity", value: access.activity });
  //   this.controls.push({ key: "calendar", value: access.calendar });
  //   this.controls.push({ key: "message", value: access.message });
  //   this.controls.push({ key: "report", value: access.report });
  //   this.controls.push({ key: "settings", value: access.settings });
  //   this.controls.push({ key: "website", value: access.website });

  //   console.log("Logger Access Check", access)

  // }

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


  createUser() {
    // Add logic to handle form submission here
    // This is where you can access newUser properties and perform actions like API calls, validation, etc.

    this.authService.registerUser(this.newUser).subscribe(
      (response) => {
        console.log(response, 'registration response here');
        // Handle the registration success here
        if (response) {
          this.toastr.success(response.message);

          // Clear the form fields after successful registration
          this.newUser = new User
          this.modalService.dismissAll();
          this.loadUsers()
        }
      },
      (error) => {
        console.error('Error during registration:', error);
        // Handle the registration error here
      }
    );
  }


  loadUsers() {

    let $this = this

    this.backupService.getUsers()
      .subscribe(
        (response: any) => {
          console.log(response, 'ceck=================')

          $this.users = response.users
          $this.filteredUsers = $this.users


        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      )
  }


  public changingValue: Subject<any> = new Subject();
  public userId: any

  // public ministryId: any
  onDelete(data: any, target: any) {
    this.userId = data
    console.log(this.userId)


    this.changingValue.next({
      status: "warning",
      message: "Are you sure you want to do this?",

    })
  }




  delete($event: Event) {

    let $this = this
    let status: any = $event


    if (status) {
      // send delete Request to server
      this.backupService.deleteUserId(this.userId).subscribe((response => {
        $this.toastr.success("Request Successfully completed")
        $this.loadUsers()

      }))


    }
  }

  makeAdmin(userid: any) {
    const userId = userid

    let $this = this;

    this.songService.makeAdmin(userId).subscribe(
      response => {
        if (response)
          $this.toastr.success("you are now an admin")
        $this.loadUsers()
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
        $this.loadUsers()
      },

      error => console.error(error)
    );
  }




}
