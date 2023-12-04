import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from '../maps/map/map.component';


@NgModule({
  declarations: [DashboardComponent, MapComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    LeafletModule,
    HttpClientModule,
    NgChartsModule,
    NgCircleProgressModule.forRoot(),
  ]
})
export class DashboardModule { }
