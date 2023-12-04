import { Component, OnInit, Output, Input, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { isNumber } from 'util';

@Component({
  selector: 'app-alerts',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponents {


  public message: string = "Suceessfully Completed"

  public caption: string = ""

  @Input() status: Subject<any>;

  @Input() onTrigger: boolean;
  @Output() onTriggerChange = new EventEmitter<boolean>();

  @ViewChild('successmodal')
  private successmodal: TemplateRef<any>;

  @ViewChild('errormodal')
  private errormodal: TemplateRef<any>;

  @ViewChild('warningmodal')
  private warningmodal: TemplateRef<any>;

  constructor(private modalService: NgbModal) {

  }

  SuccessOpen(successmodal) {
    this.modalService.open(successmodal, { centered: true });
  }

  ErrorOpen(errormodal) {
    this.modalService.open(errormodal, { centered: true });
  }

  WarningOpen(warningmodal) {
    this.modalService.open(warningmodal, { centered: true });
  }

  ngAfterViewInit() {

    let $this = this;

    this.status.subscribe(v => {

      $this.message = v.message;
      $this.caption = v.caption;

      switch (v.status) {
        case "success":
          $this.SuccessOpen(this.successmodal)
          break;
        case "error":
          $this.ErrorOpen(this.errormodal)
          break;
        case "warning":
          $this.WarningOpen(this.warningmodal)
          break;
      }

    })
  }

  onConfirm() {

    this.onTrigger = true
    this.onTriggerChange.emit(this.onTrigger)
    this.modalService.dismissAll()
  }
}