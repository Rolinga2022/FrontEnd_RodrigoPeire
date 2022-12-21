import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HabBlanda } from 'src/app/model/hab-blanda/hab-blanda';
import { ServHabBlandaService } from 'src/app/servicios/hab-blandas/serv-hab-blanda.service';


@Component({
  selector: 'app-mashabblanda',
  templateUrl: './mashabblanda.component.html',
  styleUrls: ['./mashabblanda.component.css']
})
export class MashabblandaComponent implements OnInit {

  //ESTE ES EL TS DEL FORMULARIO PARA AGREGAR UNA NUEVA habilidad blanda

  //en este caso, para pasarselo al comp "g-habblanda.component"
  @Output() agregarHabBlanda: EventEmitter<HabBlanda> = new EventEmitter();
  
  //Declaro e inicializo las variables que voy a recibir del template,
  //es decir, del formulario "masexperiencia"
  nombreHabBlanda:string = "";
  porcentaje:number = 0;

  constructor(private servHabBlanda:ServHabBlandaService) { }

  ngOnInit(): void {
  }

  //Metodo para crear el elemento que va a ser enviado a traves del "Output"
  //al componente "g-habblanda.component" para luego ser cargado a la DB
  clickEnAgregar() {
    const habBlanda = {
      nombreHabBlanda: this.nombreHabBlanda,
      porcentaje: this.porcentaje,
    };
    this.agregarHabBlanda.emit(habBlanda);
  }


}
