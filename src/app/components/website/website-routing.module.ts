import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteBlogComponent } from './blogs/blogs.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { LayoutsComponent } from './layout/layout.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'user',
                component: WebsiteBlogComponent
            },
            {
                path: 'blogs/view/:index',
                component: BlogDetailsComponent
            },
            {
                path: 'enquiry',
                component: EnquiryComponent
            },
            {
                path: 'layouts',
                component: LayoutsComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobsRoutingModule { }
