import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HabDura } from 'src/app/model/hab-dura/hab-dura';
import { ServHabDuraService } from 'src/app/servicios/hab-duras/serv-hab-dura.service';


@Component({
  selector: 'app-mashabdura',
  templateUrl: './mashabdura.component.html',
  styleUrls: ['./mashabdura.component.css']
})
export class MashabduraComponent implements OnInit {

  //ESTE ES EL TS DEL FORMULARIO PARA AGREGAR UNA NUEVA habilidad dura

  //en este caso, para pasarselo al comp "g-habdura.component"
  @Output() agregarHabDura: EventEmitter<HabDura> = new EventEmitter();
  
  //Declaro e inicializo las variables que voy a recibir del template,
  //es decir, del formulario "mashabdura"
  nombreHabDura:string = "";
  porcentaje:number = 0;

  
  constructor(private servHabDura: ServHabDuraService) {}

  ngOnInit(): void {
  }

  //Metodo para crear el elemento que va a ser enviado a traves del "Output"
  //al componente "g-habdura.component" para luego ser cargado a la DB
  clickEnAgregar() {
    const habDura = {
      nombreHabDura: this.nombreHabDura,
      porcentaje: this.porcentaje,
    };
    this.agregarHabDura.emit(habDura);
  }

 

}
