import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users/user.service';
import { BlogService } from 'src/app/shared/services/web/blog.service';
import { WebService } from 'src/app/shared/services/web/web.service';
import { Blog } from '../blogs/model/blog.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  public blog: Blog = new Blog();

  constructor(
    private modalService: NgbModal,
    private authService: AuthenticationService,
    private userService: UserService,
    private blogService: BlogService,
    private webService: WebService,
    private toastr: ToastrService,
    private router: ActivatedRoute
    ) {
    
   }

    ngOnInit(): void {

        this.load()
    }

    load(){

        let uuid =   this.router.snapshot.paramMap.get('index')
        this.blogService.fetch(uuid).subscribe(response => {

            console.log("Blogs:: ", response)
            if(response.status == 'success'){
                this.blog = response.data
            }
        })
    }

    logChange($event: any, key){

        this.blog.content = $event.html
    
        let $key = {}
        $key[key] = $event.html
        this.onSave($key)
    }
  
    onSave($key){
    
        let body:any = {}
        body.data = $key;
        body.target = {"id": this.blog.id};

        console.log("Server Response:: ", body, this.blog)
    
        this.blogService.update( body ).subscribe(response => {
    
            if(response.status == 'success'){
                this.load()
            }
        })
    
    }

    onReceivedUpdate($event){

        this.onSave({cover: $event})
    }

}