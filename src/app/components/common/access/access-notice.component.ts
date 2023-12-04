import { Component, OnInit, Output, Input, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { isNumber } from 'util';

@Component({
  selector: 'access-notice',
  templateUrl: './access-notice.component.html',
  styleUrls: ['./access-notice.component.scss'],
})
export class AccessNoticeComponent {

    @Input() hide: boolean = true;

    ngAfterViewInit(){

      console.log("Hide status", this.hide)
    }
}