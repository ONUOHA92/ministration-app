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
import { CreateMinstrationComponent } from './create-ministration.component';
// import { AllMinistrationComponent } from './all-ministration.component';
import { CreateMinRoutingModule } from './create-minstration.routing.module'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AdminMinEditorComponent } from './editor/admin-min-editor.component';

// import { AdminAccessComponent } from './admin-access/admin-access.component';
// import { as ComponentModule } from "../common/component.module";


@NgModule({
    declarations: [CreateMinstrationComponent, AdminMinEditorComponent],
    providers: [
        ToastrService
    ],
    imports: [
        NgbModule,
        CommonModule,
        LeafletModule,
        NgSelectModule,
        HttpClientModule,
        CreateMinRoutingModule,
        NgChartsModule,
        FormsModule,
        NgxPaginationModule,
        ComponentModule,
        NgCircleProgressModule.forRoot(),
        //ToastrModule.forRoot(),


    ]
})
export class CreateMinistrationModule { }