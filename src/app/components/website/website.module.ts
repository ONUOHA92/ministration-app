import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './website-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../common/component.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { WebsiteBlogComponent } from './blogs/blogs.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';
import { LayoutsComponent } from './layout/layout.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

@NgModule({
  declarations: [EnquiryComponent, WebsiteBlogComponent, LayoutsComponent, BlogDetailsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    NgbModule,
    LeafletModule,
    HttpClientModule,
    NgSelectModule,
    NgChartsModule,
    FormsModule,
    ComponentModule,
    NgxPaginationModule,
    NgCircleProgressModule.forRoot(),
    QuillModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    ToastrService
  ]
})
export class WebsiteModule { }
