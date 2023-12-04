import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { UserList, UserPayload, UserRecord } from 'src/app/shared/models/auth.models';
import { Assigned, Job, Schedule } from 'src/app/shared/models/job.model';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { DateService } from 'src/app/shared/services/date.service';
import { PayloadService } from 'src/app/shared/services/requests/payload.service';
import { UserService } from 'src/app/shared/services/users/user.service';
import { DateUtilService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public changingValue: Subject<any> = new Subject();

  public users: Array<UserList> = new Array<UserList>();

  public jobs: Array<Job> = new Array<Job>();

  public newUser: UserPayload = new UserPayload();

  public page = 1
  public config: any = {
    currentPage: 1,
    pageSize: 6,
    maxSize: 5
  };

  public available_page = 1
  public moddal_available_config: any = {
    currentPage: 1,
    pageSize: 10,
    maxSize: 10
  };

  public assigned_page = 1
  public moddal_assign_config: any = {
    currentPage: 1,
    pageSize: 10,
    maxSize: 10
  };

  public is_update: boolean = false

  public status: string = "success"

  constructor(
    private modalService: NgbModal,
    private authService: AuthenticationService,
    private userService: UserService,
    private toastr: ToastrService,
    private dateService: DateService,
    private payloadService: PayloadService,
    private route: ActivatedRoute
  ) {


  }


  public access: any;

  ngOnInit(): void {

    this.access = this.authService.access.user

    this.load()
  }

  Select2Open(select2modal) {

    this.is_update = false;

    this.modalService.open(select2modal);
  }

  SuccessOpen(successmodal) {
    this.modalService.open(successmodal, { centered: true });
  }


  load() {

    let $this = this

    this.userService.all(function (result, status) {

      if (status) {
        $this.users = result
      }

    })
  }

  loadJobs() {


  }

  formatDate(date: string) {

    return this.dateService.formatEnUSWithOption(date)
  }

  // pageChanged(event) {
  //   this.config.currentPage = event;
  //   console.log("9876789")
  // }




  onCreateUser($event: Event) {

    let $this = this

    let target = this.is_update ? "update" : "create";

    this.userService.send(target, this.newUser, function (result, status) {

      if (status) {
        $this.load()
        $this.toastr.success("Request Successfully completed", "User record was created")
        $this.modalService.dismissAll()
      }

    })
  }

  onViewDetails(data: UserRecord) {

    // routerLink="/users/{{data.id}}/details"

  }

  onEdit(data: UserRecord, select2modal) {

    this.is_update = true

    let names = data.name.split(" ")

    this.newUser.client_id = data.client_id
    this.newUser.id = data.id
    this.newUser.patient_phone = data.phone
    this.newUser.patient_forename = names[0]
    this.newUser.patient_surname = names[1]
    this.newUser.patient_email = "";

    this.modalService.open(select2modal);
  }

  public message: string = "Are you sure you want to do this?"
  public selected
  onDelete(data: any, select2modal) {

    this.selected = data

    this.changingValue.next({ status: "warning", message: this.message })
  }

  isOpen(date: string) {

    return this.dateService.compare(date)
  }

  delete($event: Event) {

    let $this = this
    let id = this.selected.id
    let status: any = $event

    if (status) {
      // send delete Request to server
      this.userService.delete(id, function (response, status) {

        if (status) {
          $this.load()
          $this.toastr.success("Request Successfully completed", "User record was deleted")
        }
      })
    }
  }

  public selectedAssign: Array<Assigned> = new Array<Assigned>();
  viewAssigned(data: any, assignedModel) {

    console.log(data, assignedModel)

    this.selectedAssign = data.assigned

    // fetch fresh data from online

    this.modalService.open(assignedModel, { scrollable: true, size: 'xl' })

  }

  public selectedAvailabilityData: UserList = new UserList()
  public selectedAvailability: Array<Schedule> = new Array<Schedule>();
  viewAvailability(data: any, availableModel) {

    this.selectedAvailability = data.availability;
    this.selectedAvailabilityData = data

    // fetch nfresh dta from online
    this.payloadService.request(`user/jobs/available/days/list/${data.id}/60`, {}, this.payloadService.TYPE_GET, function (response, status) {

      console.log(status, response);

    })


    /**
     * reset the available page back to index 1
     */
    this.available_page = 1;

    this.modalService.open(availableModel, { scrollable: true, size: 'xl' })
  }

  public workDayToAssign: Schedule = new Schedule()
  assignWork(data: any, assignWorkSchedule) {

    this.modalService.dismissAll()
    this.modalService.open(assignWorkSchedule)

    this.loadJobs()

    // Value that contains the data to be used - date to assign
    this.workDayToAssign = data;
  }


  public selectedAssignedData: UserList = new UserList()
  viewAssignedWork(data: any, assignedModel) {

    // console.log("Data Search: ------------------------------------>>>>>>>>>>>>>>>>>>> ", data.assigned)

    this.selectedAssignedData = data; //this is a user

    this.modalService.open(assignedModel, { scrollable: true, size: 'xl' })
  }


  public assignNewJob: Assigned = new Assigned()
  onSelected($event: Event) {


    let job_id: any = $event
    this.assignNewJob.user_id = this.workDayToAssign.user_id
    this.assignNewJob.job_id = job_id
    this.assignNewJob.is_reminder_sent = 0
    this.assignNewJob.status = 1
    this.assignNewJob.job_assigned_date = this.workDayToAssign.days

  }

  onSubmitAssigned($event: Event) {


  }


}
