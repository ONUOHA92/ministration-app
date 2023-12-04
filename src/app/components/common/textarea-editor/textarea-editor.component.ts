import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { WebService } from 'src/app/shared/services/web/web.service';
import { isNumber } from 'util';

@Component({
  selector: 'textarea-editor',
  templateUrl: `./textarea-editor.component.html`,
  styleUrls: ['./textarea-editor.component.scss'],
})
export class TextAreaEditorComponent {

  @Input() label:string;
    @Input() required:boolean = true;
    @Input() type: string = "text";
    @Input() id: string = "";
    @Input() placeholder: string = "";
    @Input() value: any = "";
    @Input() class: string = "form-control";
    
    @Input() inputModel: string;
    @Output() inputModelChange = new EventEmitter<string>();

    public is_required: boolean = false;

    public is_showing: boolean = true;

    constructor(private webService: WebService){

    }

    logChange($event: any){

      if($event.html == undefined ){
          return;
      }

      this.inputModelChange.emit(this.inputModel)

    }


}