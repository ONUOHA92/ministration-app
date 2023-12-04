import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { User, UserList } from 'src/app/shared/models/auth.models';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users/user.service';
import { WebService } from 'src/app/shared/services/web/web.service';
import { Layout } from '../../pages/pages/editor/model/pages.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutsComponent implements OnInit {

  public users: Array<UserList>;

  public layout: Layout = new Layout();

  public config: any;

  constructor(
    private modalService: NgbModal,
    private authService: AuthenticationService,
    private userService: UserService,
    private webService: WebService,
    private toastr: ToastrService,
  ) {

    this.config = {
      itemsPerPage: 5,
      currentPage: 1
    };
  }



  ngOnInit(): void {

    this.getLayouts();
  }

  openLayoutModal(layoutModal) {
    this.modalService.open(layoutModal, { size: "xl" });
  }

  public nlayout: Layout = new Layout()
  public layouts: Array<Layout> = new Array<Layout>()






  getLayouts() {

    let $this = this

    this.webService.all(`layout`, function (result, status) {
      console.log(result, 'result')
      if (status) {
        $this.layouts = result
      }

    })
  }

  layoutinfo = {
    content: '' // Initialize content as needed
  };


  ngAfterViewInit() {
    // Set the initial value here if it's still not appearing
    this.layoutinfo.content = 'Initial value';
  }

  onSave(eventData: any) {
    // This method will be called when the event is triggered from <app-textarea>
    // You can access the value from eventData here
    const contentValue = eventData;
    console.log(contentValue);
  }








  createLayout() {
    let $this = this
    const label = this.layout.label
    const layout = this.layout.layout
    const content = this.layoutinfo




    const layoutinfo = {
      label,
      layout,
      content
    }





    this.webService.create('layout', this.layout).subscribe(
      (response: any) => {
        console.log('Layout created successfully', response);
        // Handle success, e.g., show a success message
        $this.getLayouts();
        $this.toastr.success('Record updated successfully', 'Success');
      },
      (error: any) => {
        console.error('Failed to create layout', error);
        // Handle error, e.g., show an error message
      }
    );
  }



  pageChanged(event) {
    this.config.currentPage = event;
  }

  public updatelayout: Layout;
  onEdit(data, layoutUpdateModal) {
    this.updatelayout = data;
    console.log(this.updatelayout, 'data')
    this.modalService.open(layoutUpdateModal, { size: "xl" })
  }



  updateLayout() {

    let $this = this

    const id = this.updatelayout.id;
    const label = this.updatelayout.label;
    const layout = this.updatelayout.layout
    const content = this.updatelayout.content
    const payload = {
      target: {
        id: id
      },
      data: {
        label: label,
        layout: layout,
        content: content
      }
    };

    if (this.updatelayout) {
      this.webService.update(`layout`, payload).subscribe(
        (response: any) => {

          console.log('Layout updated successfully', response);
          // Handle success, e.g., show a success message
          $this.getLayouts();
          $this.toastr.success('Record updated successfully', 'Success');
        },
        (error: any) => {
          console.error('Failed to update layout', error);
          // Handle error, e.g., show an error message
          this.toastr.error('An error occurred while updating the record', 'Error');
        }
      );
    }
  }






  /** ------------------------delete ------------------------ */
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
      this.webService.delete('layout', this.selectedid, function (response, status) {

        if (status) {
          $this.getLayouts()
          $this.toastr.success("Request Successfully completed", "Record was deleted")
        }
      })
    }
  }

  page = 1

}




