import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { User, UserList } from 'src/app/shared/models/auth.models';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users/user.service';
import { BlogService } from 'src/app/shared/services/web/blog.service';
import { WebService } from 'src/app/shared/services/web/web.service';
import { SongService } from 'src/app/shared/services/web/songs.service';
import { Blog, Levite } from './model/blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class WebsiteBlogComponent implements OnInit {
  update($event: any) {
    throw new Error('Method not implemented.');
  }

  public blogs: Array<Blog> = new Array<Blog>();
  public Ministration: Array<Levite> = new Array<Levite>();

  public newUser: User = new User();

  public config: any = {
    currentPage: 1,
    pageSize: 6,
    maxSize: 5
  };

  constructor(
    private modalService: NgbModal,
    private authService: AuthenticationService,
    private userService: UserService,
    private blogService: BlogService,
    private songService: SongService,
    private webService: WebService,
    private toastr: ToastrService,
  ) {

  }

  ngOnInit(): void {

    this.load()
    this.getAllMinistries()
  }

  onCreateBlog(createBlog) {

    this.blog = new Blog();
    this.modalService.open(createBlog, { size: "lg" });
  }

  load() {

    this.blogService.all().subscribe(response => {
      console.log(response, 'let check for all ministrarion')
      if (response.status == "success") {
        this.blogs = response.data
        this.toastr.success("Request Successfully completed", "Record was deleted")
      }
    })
  }


  getAllMinistries() {
    this.songService.allMin().subscribe(
      (response: any) => {
        console.log(response, 'check for ministry'); // Handle the response as needed
        // Assuming your response has a 'ministries' property
        // this.ministriesList = response.ministries;
      },
      (error) => {
        console.error(error); // Handle errors
      }
    );
  }


  getCategory(data: any) {

    try {
      if (data.category == undefined) {
        return "None"
      } else {
        return data.category
      }
    } catch (e) {
      return "None"
    }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  page = 1


  public blog: Blog = new Blog()


  onSubmitBlog() {

    this.blog.cover = "--"
    this.blog.category_id = 1;

    this.blogService.create(this.blog).subscribe(response => {

      if (response.status == "success") {
        this.toastr.success("Request Successfully completed", "Record was deleted")
      }
    })
  }

  onEdit(data: Blog, editBlogPost: any) {

    this.blog = data;
    this.modalService.open(editBlogPost, { size: "lg" });
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

    let status: any = $event

    if (status) {
      // send delete Request to server
      this.blogService.delete(this.selectedid).subscribe(response => {

        if (response.status == "success") {
          this.load()
          this.toastr.success("Request Successfully completed", "Record was deleted")
        }
      })
    }
  }

}
