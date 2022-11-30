import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-btnaddcursos',
  templateUrl: './btnaddcursos.component.html',
  styleUrls: ['./btnaddcursos.component.css']
})
export class BtnaddcursosComponent implements OnInit {

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
