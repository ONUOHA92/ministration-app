import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Element } from 'src/app/components/pages/pages/editor/model/class-cms';
import { WebService } from 'src/app/shared/services/web/web.service';
import { isNumber } from 'util';

@Component({
  selector: 'element-editor',
  templateUrl: `./text-editor.component.html`,
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent {

    @Input() label:string;
    @Input() groupid: number;
    @Input() uuid: string;
    @Input() data: Element;

    @Input() required:boolean = true;
    @Input() type: string = "text";
    @Input() placeholder: string = "";
    @Input() value: any = "";
    @Input() class: string = "form-control";
    
    @Input() inputModel: string;
    @Output() inputModelChange = new EventEmitter<string>();
    @Output() onModelChange = new EventEmitter<Element>(); // when input change, call update
    @Output() onModelDelete = new EventEmitter<Element>(); // delete, call delete 


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