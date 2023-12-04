import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() accordionData: any[] = [];
  title: any;
  description: any;
  songsDetail: any;

  constructor() { }

  ngOnInit(): void {
  }


}
