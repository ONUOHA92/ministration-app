import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { User, UserList } from 'src/app/shared/models/auth.models';
import { Job, JobAssignedPayload } from 'src/app/shared/models/job.model';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users/user.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  public users: Array<UserList> = new Array<UserList>()

  public jobs: Array<Job> = new Array<Job>();

  public modalValue: Subject<any> = new Subject();

  public reports: any = [];

  public newUser: User = new User();

  public form: Form = new Form()

  public newNessage: JobAssignedPayload = new JobAssignedPayload()

  public levels: any = [
      {
        id:0,
        name: "None"
      },
      {
        id:1,
        name: "Low"
      },
      {
        id:2,
        name: "Medium"
      },
      {
        id:3,
        name: "High"
      }
  ]

  // /Low/Medium/High

  public config: any;

  constructor(
    private modalService: NgbModal,
    private authService: AuthenticationService,
    private userService: UserService,
    ) {

      this.config = {
        itemsPerPage: 5,
        currentPage: 1
      };
   }

  ngOnInit(): void {

    this.loadUsers()

    this.loadJobs()

  }

  Select2Open(select2modal) {
    this.modalService.open(select2modal);
  }

  loadUsers(){

    let $this = this

    this.userService.all(function(result, status){

      console.log(result, status)

       if(status){
          $this.users = result
       }

    })
}

  loadJobs(){


  }



  onSubmit(){


  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  page = 1



  onSelected($event: any, target: any){

    switch(target){
       case "user": this.form.senior_staff_id = $event; break;
       case "o2": this.form.use_of_o2 = $event; break;
       case "job": this.form.job_id = $event; break;
       case "entonox": this.form.use_of_entonox = $event; break;
    }

  }

}

class Form {

    job_id: number
    senior_staff_id: number
    date: string
    paramedics: number
    technicians: number
    clock_in_time: string
    clock_out_time: string
    callouts:number
    ear_pugs: number
    ambulances: number
    arena_staff: number
    catering: number
    event_staff: number
    competitor: number
    visitor: number
    use_of_o2: string
    use_of_entonox: string
}
