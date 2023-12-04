import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AllMinstrationRoutingModule } from './all-minstration.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../common/component.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { AllMinistrationComponent } from './all-ministration.component';
import { AllMinRoutingModule } from './all-minstration.routing.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ElementsModule } from '../elements/elements.module';
// import { AdminAccessComponent } from './admin-access/admin-access.component';
// import { as ComponentModule } from "../common/component.module";


@NgModule({
    declarations: [AllMinistrationComponent],
    providers: [
        ToastrService
    ],
    imports: [
        NgbModule,
        CommonModule,
        LeafletModule,
        NgSelectModule,
        HttpClientModule,
        NgChartsModule,
        AllMinRoutingModule,
        FormsModule,
        ElementsModule,
        NgxPaginationModule,
        ComponentModule,
        NgCircleProgressModule.forRoot(),
        //ToastrModule.forRoot(),


    ]
})
export class AllMinistrationModule { }