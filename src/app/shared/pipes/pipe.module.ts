import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './search-table.pipe';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        FilterPipe
    ],
    exports: [
        FilterPipe
    ]
})

export class PipeModule { }