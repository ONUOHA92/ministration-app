import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Element } from 'src/app/components/pages/pages/editor/model/class-cms';
import { WebService } from 'src/app/shared/services/web/web.service';
import { isNumber } from 'util';

@Component({
  selector: 'element-input',
  templateUrl: `./text-input.component.html`,
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {

    @Input() label:string;
    @Input() type:string = "text";
    @Input() readonly: string;

    @Input() uuid: any;
    @Input() data: Element;

    @Input() groupid: number;
    @Input() class: string = "form-control";
    
    @Input() inputModel: string;
    @Output() onModelChange = new EventEmitter<Element>(); // when input change, call update
    @Output() onModelDelete = new EventEmitter<Element>(); // delete, call delete 

    @Output() stateChange = new EventEmitter<string>();
    @Input() validation:boolean = false;
    @Output() onValidatorChange = new EventEmitter<string>();

    public is_required: boolean = false;
    public is_showing: boolean = true;

    constructor(private webService: WebService){

    }

    validate($event: Event, form:any){
        
        
    }

    onUpdate($event: any){

        this.data.value = this.inputModel
        this.data.group_id = this.groupid
        this.data.group_uuid = this.uuid
        this.onModelChange.emit(this.data)
    }

    onDelete($event: any){
      this.data.group_id = this.groupid
      this.data.group_uuid = this.uuid
      this.onModelDelete.emit(this.data)
    }
}