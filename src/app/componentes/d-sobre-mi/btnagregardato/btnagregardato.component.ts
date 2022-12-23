import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btnagregardato',
  templateUrl: './btnagregardato.component.html',
  styleUrls: ['./btnagregardato.component.css']
})
export class BtnagregardatoComponent implements OnInit {

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
