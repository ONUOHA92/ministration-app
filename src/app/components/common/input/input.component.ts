import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { isNumber } from 'util';

@Component({
  selector: 'app-input',
  template: `<input
                    [type]="type" 
                    [readonly]="readonly"
                    [class]="class" 
                    autocomplete="off"
                    [(ngModel)]="inputModel"
                    (ngModelChange)="onChangeInput()"
                    [id]="id"
                    [placeholder]="placeholder"
                    [value]="value">
                    <small>{{ info }}</small>`,
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {

    @Input() readonly: string
    @Input() info: string = ""
    @Input() required:boolean = true;
    @Input() type: string = "text";
    @Input() id: string = "";
    @Input() placeholder: string = "";
    @Input() value: any = "";
    @Input() class: string = "form-control";
    

    @Input() inputModel: string;
    @Output() inputModelChange = new EventEmitter<string>();
    @Output() onDataModelChange = new EventEmitter<{}>();


    @Input() validation:boolean = false;
    @Output() onValidatorChange = new EventEmitter<string>();

    public is_required: boolean = false;

    constructor(){

    }


    onChangeInput(){

      this.inputModelChange.emit(this.inputModel)

      let data:any = {}
      data.name = this.id
      data.value = this.inputModel
      
      this.onDataModelChange.emit(data)
    }

    validate($event: Event, form:any){
        
        
    }

}