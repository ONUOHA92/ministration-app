import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { ViewMailComponent } from './view-mail/view-mail.component';
import { MailRoutingModule } from './mail-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ComponentModule } from '../common/component.module';



@NgModule({
  declarations: [MailInboxComponent, ViewMailComponent],
  imports: [
    CommonModule,
    MailRoutingModule,
    NgbModule,
    PipeModule,
    // ToastrModule.forRoot(),
    ComponentModule
  ],
  providers: [
    ToastrService
  ]
})
export class MailModule { }
