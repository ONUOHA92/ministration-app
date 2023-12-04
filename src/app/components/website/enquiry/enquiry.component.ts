import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User, UserList } from 'src/app/shared/models/auth.models';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users/user.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  public users: Array<UserList>;

  public newUser: User = new User();

  public config: any;

  constructor(
    private modalService: NgbModal,
    private authService: AuthenticationService,
    private userService: UserService
    ) {
    
      this.config = {
        itemsPerPage: 5,
        currentPage: 1
      };
   }

  ngOnInit(): void {

    this.load()
  }

  Select2Open(select2modal) {
    this.modalService.open(select2modal);
  }

  load(){

    let $this = this

    this.userService.all(function(result, status){

      console.log(result, status)

       if(status){
          $this.users = result
       }

    })
}

pageChanged(event) {
  this.config.currentPage = event;
}

page = 1

}
