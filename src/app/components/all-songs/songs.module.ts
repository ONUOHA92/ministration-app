import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsRoutingModule } from './songs-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../common/component.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { SongComponent } from './songs/songs.component';
import { QuillModule } from 'ngx-quill';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// import { AdminAccessComponent } from './admin-access/admin-access.component';
// import { as ComponentModule } from "../common/component.module";


@NgModule({
  declarations: [SongComponent,],
  providers: [
    ToastrService
  ],
  imports: [
    NgbModule,
    CommonModule,
    LeafletModule,
    SongsRoutingModule,
    NgSelectModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    NgxPaginationModule,
    ComponentModule,
    NgCircleProgressModule.forRoot(),
    QuillModule.forRoot(),
    //ToastrModule.forRoot(),


  ]
})
export class SongsModule { }










