import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Descripcion } from 'src/app/model/descripcion-pers/descripcion-pers';
import { ServDescripcionService } from 'src/app/servicios/descripcion-pers/serv-descripcion.service';

@Component({
  selector: 'app-masdescripcion',
  templateUrl: './masdescripcion.component.html',
  styleUrls: ['./masdescripcion.component.css']
})
export class MasdescripcionComponent implements OnInit {

  //ESTE ES EL TS DEL FORMULARIO PARA AGREGAR UNA NUEVA descripcion

  //en este caso, para pasarselo al comp "encabezado.component"
  @Output() agregarDesc: EventEmitter<Descripcion> = new EventEmitter();

  //Declaro e inicializo las variables que voy a recibir del template,
  //es decir, del formulario "masdescripcion"
  descripcion:string = "";

  constructor(private servDescripcion:ServDescripcionService) { }

  ngOnInit(): void {
  }

  //Metodo para crear el elemento que va a ser enviado a traves del "Output"
  //al componente "encabezado.component" para luego ser cargado a la DB
  clickEnAgregar() {
    const descripcion = {
      descripcion: this.descripcion,
    };
    this.agregarDesc.emit(descripcion);
  }

}
