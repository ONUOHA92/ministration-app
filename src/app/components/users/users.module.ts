import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './users-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../common/component.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [UsersComponent, DetailsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    NgbModule,
    LeafletModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    NgSelectModule,
    ComponentModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    ToastrService
  ]
})
export class UsersModule { }
