import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { ReviewsComponent } from './reviews/reviews.component';

import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../common/component.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    NgbModule,
    NgSelectModule,
    LeafletModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    ComponentModule,
    NgxPaginationModule,
    NgCircleProgressModule.forRoot(),
  ]
})
export class ReviewsModule { }
