import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Element } from 'src/app/components/pages/pages/editor/model/class-cms';
import { Images } from 'src/app/components/pages/pages/editor/model/pages.model';
import { WebService } from 'src/app/shared/services/web/web.service';

@Component({
  selector: 'image-select',
  templateUrl: `./image-select.component.html`,
  styleUrls: ['./image-select.component.scss'],
})
export class ImageSelectComponent {

    @Input() label:string;

    @Input() required:boolean = true;
    @Input() uuid: string = "";
    @Input() placeholder: string = "";
    @Input() value: any = "";
    @Input() class: string = "form-control";
    
    @Input() inputModel: string;
    @Output() inputModelChange = new EventEmitter<string>();
    @Output() onModelChange = new EventEmitter<string>(); // when input change, call update

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

        console.log("Update:::", $event)
        this.onModelChange.emit($event)
    }
}