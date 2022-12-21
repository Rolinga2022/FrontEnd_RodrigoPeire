import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Academica } from 'src/app/model/academica/academica';
import { ServFormacionService } from 'src/app/servicios/formaciones/serv-formacion.service';


@Component({
  selector: 'app-masacademica',
  templateUrl: './masacademica.component.html',
  styleUrls: ['./masacademica.component.css']
})
export class MasacademicaComponent implements OnInit {

  //ESTE ES EL TS DEL FORMULARIO PARA AGREGAR UNA NUEVA habilidad blanda

  //en este caso, para pasarselo al comp "f-academico.component"
  @Output() agregarFormAcad: EventEmitter<Academica> = new EventEmitter();

  //Declaro e inicializo las variables que voy a recibir del template,
  //es decir, del formulario "masexperiencia"
  nombreInstituto:string = "";
  titulo:string="";
  duracion:string = "";

  constructor(private servAcademico: ServFormacionService) {}

  ngOnInit(): void {
  }

 //Metodo para crear el elemento que va a ser enviado a traves del "Output"
  //al componente "f-academica.component" para luego ser cargado a la DB
  clickEnAgregar() {
    const academica = {
      nombreInstituto: this.nombreInstituto,
      titulo: this.titulo,
      duracion: this.duracion,
    };
    this.agregarFormAcad.emit(academica);
  }

}
