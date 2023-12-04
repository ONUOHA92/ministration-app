import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AccessNoticeComponent } from './access/access-notice.component';
import { AlertComponent } from './alerts/alert.component';
import { DateInputComponent } from './element/date/date.component';
import { DateTimeInputComponent } from './element/datetime/datetime.component';
import { ImagePickerComponent } from './element/picker/image-picker.component';
import { TextEditorComponent } from './element/text-editor/text-editor.component';
import { TextInputComponent } from './element/text/text-input.component';
import { AlertComponents } from './alert/alert.component';
import { InputComponent } from './input/input.component';
import { TextAreaEditorComponent } from './textarea-editor/textarea-editor.component';
import { TextAreaComponent } from './textarea/textarea.component';
import { ImageSelectComponent } from './element/image/image-select.component';
import { AccordionComponent } from '../elements/accordion/accordion.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        QuillModule.forRoot(),
    ],
    declarations: [
        TextAreaComponent,
        InputComponent,
        AlertComponent,
        AlertComponents,
        TextInputComponent,
        TextEditorComponent,
        ImagePickerComponent,
        AccessNoticeComponent,
        TextAreaEditorComponent,
        DateInputComponent,
        DateTimeInputComponent,
        ImageSelectComponent,


    ],
    exports: [
        TextAreaComponent,
        InputComponent,
        AlertComponent,
        AlertComponents,
        TextInputComponent,
        TextEditorComponent,
        ImagePickerComponent,
        AccessNoticeComponent,
        TextAreaEditorComponent,
        DateInputComponent,
        DateTimeInputComponent,
        ImageSelectComponent,

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentModule { }
