import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SobreMi } from 'src/app/model/sobre-mi/sobre-mi';
import { ServSobreMiService } from 'src/app/servicios/sobre-mi/serv-sobre-mi.service';

@Component({
  selector: 'app-masdato',
  templateUrl: './masdato.component.html',
  styleUrls: ['./masdato.component.css']
})
export class MasdatoComponent implements OnInit {

  //ESTE ES EL TS DEL FORMULARIO PARA AGREGAR UN nuevo dato

  //en este caso, para pasarselo al comp "sobremi.component"
  @Output() agregarDato: EventEmitter<SobreMi> = new EventEmitter();

  //Declaro e inicializo las variables que voy a recibir del template,
  //es decir, del formulario "masdato"
  dato:string = "";

  constructor(private servSobreMi:ServSobreMiService) { }

  ngOnInit(): void {
  }

  //Metodo para crear el elemento que va a ser enviado a traves del "Output"
  //al componente "sobremi.component" para luego ser cargado a la DB
  clickEnAgregar() {
    const dato = {
      dato: this.dato,
    };
    this.agregarDato.emit(dato);
  }

}
