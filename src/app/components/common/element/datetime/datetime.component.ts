import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { WebService } from 'src/app/shared/services/web/web.service';
import { isNumber } from 'util';

@Component({
  selector: 'element-datetime',
  templateUrl: `./datetime.component.html`,
  styleUrls: ['./datetime.component.scss'],
})
export class DateTimeInputComponent {

  @Input() label:string;
    @Input() id: string = "";
    @Input() value: any = "";
    @Input() class: string = "form-control";
    
    @Input() inputModel: string;
    @Output() inputModelChange = new EventEmitter<string>();

    @Output() stateChange = new EventEmitter<string>();

    @Input() validation:boolean = false;
    @Output() onValidatorChange = new EventEmitter<string>();

    public is_required: boolean = false;

    public is_showing: boolean = true;

    constructor(private webService: WebService){

    }

    validate($event: Event, form:any){
        
        
    }

    logChange(data:any ){

      let $this = this

      if(data == undefined || data == ""){
          return;
      }

      if(this.id == undefined || this.id == ""){
         return;
      }

      let body:any = {
          target: {id: this.id},
          data: {value: data}
      }

      this.webService.update(`element`, body).subscribe(response => {

        // console.log("Response Data for Groups:: ", response, response.status)
        if(response.status == 'success'){
            // $this.groups = result
        }
      })
    }

    onDelete(){

      let $this = this;

      const body:any = {}
      body.id = this.id
      body.name = this.label

      this.webService.postDelete(`element`, body).subscribe(response => {
 
        if(response.status == "success"){
            this.is_showing = false
            this.stateChange.emit(this.inputModel)
        }
      })
    }

}