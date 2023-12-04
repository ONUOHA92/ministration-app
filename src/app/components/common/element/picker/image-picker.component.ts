import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Element } from 'src/app/components/pages/pages/editor/model/class-cms';
import { Images } from 'src/app/components/pages/pages/editor/model/pages.model';
import { WebService } from 'src/app/shared/services/web/web.service';
import { isNumber } from 'util';

@Component({
  selector: 'element-picker',
  templateUrl: `./image-picker.component.html`,
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent {

    @Input() label:string;
    @Input() groupid: number;
    @Input() uuid: string;

    @Input() required:boolean = true;
    @Input() type: string = "text";
    @Input() id: string = "";
    @Input() placeholder: string = "";
    @Input() value: any = "";
    @Input() class: string = "form-control";
    @Input() data:Element;
    
    @Input() inputModel: string;
    @Output() inputModelChange = new EventEmitter<string>();
    @Output() onModelChange = new EventEmitter<Element>(); // when input change, call update
    @Output() onModelDelete = new EventEmitter<Element>(); // delete, call delete 

    @Input() validation:boolean = false;
    @Output() onValidatorChange = new EventEmitter<string>();

    public is_required: boolean = false;

    public is_showing: boolean = true;

    constructor(
      private webService: WebService,
      private modalService: NgbModal
      ){

    }

    ngOnInit(): void {

    }

    load(){
        
      this.webService.list('images').subscribe(response => {
        if(response.status == 'success'){
            this.images = response.data
        }
      })
    }


    addImage(newBlock){

        this.modalService.open(newBlock, {size: "lg"});
        /**
         * Fetch images from server after opening the modal
        */
        this.load();
         
    }

    public images: Array<Images>;

    getImages(url: string){

        this.modalService.dismissAll()
        this.onUpdate(url)
    }

    onUpdate($event: any){

        this.data.value = $event
        this.data.group_id = this.groupid
        this.data.group_uuid = this.uuid
        console.log("Update Image:: ", this.data, $event)
        this.onModelChange.emit(this.data)
    }

    onDelete($event: any){
      this.data.group_id = this.groupid
      this.data.group_uuid = this.uuid
      this.onModelDelete.emit(this.data)
    }




}