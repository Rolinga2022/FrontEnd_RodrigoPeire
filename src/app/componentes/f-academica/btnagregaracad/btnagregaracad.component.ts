import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btnagregaracad',
  templateUrl: './btnagregaracad.component.html',
  styleUrls: ['./btnagregaracad.component.css']
})
export class BtnagregaracadComponent implements OnInit {

  @Input() textBtn:string = ""; //Comunicacion del template al TS.
  @Input() classBtn:string = "";

  @Output() btnClick = new EventEmitter();  //Comunicacion del TS al template.

  constructor() { }

  ngOnInit(): void {
  }

  doyClick() {
    this.btnClick.emit();
  }

}
