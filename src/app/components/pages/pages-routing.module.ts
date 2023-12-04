import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteBlogComponent } from '../website/blogs/blogs.component';
import { EnquiryComponent } from '../website/enquiry/enquiry.component';
import { DangermessageComponent } from './dangermessage/dangermessage.component';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { EditorComponent } from './pages/editor/editor.component';
import { PageComponent } from './pages/pages.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { AllMinistrationComponent } from '../all-ministration/all-ministration.component';
import { MinEditorComponent } from '../all-ministration/editor/mineditor.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { WarningmessageComponent } from './warningmessage/warningmessage.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: PageComponent
      },
      {
        path: ':index/page',
        component: EditorComponent
      },

      {
        path: 'list',
        component: AllMinistrationComponent
      },
      {
        path: 'index/minstration',
        component: MinEditorComponent
      },

      {
        path: 'blogs',
        component: WebsiteBlogComponent
      },
      {
        path: 'enquiry',
        component: EnquiryComponent
      },
      {
        path: 'empty-page',
        component: EmptypageComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }