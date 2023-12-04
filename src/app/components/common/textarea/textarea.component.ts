import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { isNumber } from 'util';

@Component({
  selector: 'app-textarea',
  templateUrl: `./textarea.component.html`,
  styleUrls: ['./textarea.component.scss'],
})
export class TextAreaComponent {

  @Input() required: boolean = true;
  @Input() type: string = "text";
  @Input() id: number;
  @Input() placeholder: string = "";
  @Input() value: any = "";
  @Input() class: string = "form-control";

  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();
  @Output() onDataModelChange = new EventEmitter<{}>();

  @Input() validation: boolean = false;
  @Output() onValidatorChange = new EventEmitter<string>();

  public is_required: boolean = false;

  constructor() {

  }

  onChangeInput() {

    // this.inputModelChange.emit(this.inputModel)

    let data: any = {}
    data.name = this.id
    data.value = this.inputModel


    console.log("DataChanged:: ", data)
    this.onDataModelChange.emit(data)
  }

  validate($event: Event, form: any) { }

}