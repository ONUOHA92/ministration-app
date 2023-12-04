import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { DangermessageComponent } from './dangermessage/dangermessage.component';
import { WarningmessageComponent } from './warningmessage/warningmessage.component';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap'
import { PageMsgRoutingModule } from './page-msg-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './pages/editor/editor.component';
import { MinEditorComponent } from '../all-ministration/editor/mineditor.component';
import { PageComponent } from './pages/pages.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentModule } from '../common/component.module';
import { DragulaModule } from 'ng2-dragula';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { QuillModule } from 'ngx-quill';
import { ElementsModule } from "../elements/elements.module";


@NgModule({
  declarations: [
    PageComponent,
    ProfileComponent,
    EditorComponent,
    InvoiceComponent,
    PricingComponent,
    GalleryComponent,
    FaqsComponent,
    MinEditorComponent,
    SuccessmessageComponent,
    DangermessageComponent,
    WarningmessageComponent,
    EmptypageComponent
  ],
  providers: [
    ToastrService
  ],
  imports: [
    CommonModule,
    NgbModule,
    PagesRoutingModule,
    PageMsgRoutingModule,
    //GalleryModule.forRoot(),
    ToastrModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ComponentModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    DragulaModule.forRoot(),
    QuillModule.forRoot(),
    ElementsModule
  ]
})
export class PagesModule { }
