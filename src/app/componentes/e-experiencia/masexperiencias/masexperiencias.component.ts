import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ServExperienService } from 'src/app/servicios/experiencias/serv-experien.service';
import { Experiencia } from 'src/app/model/experiencia/experiencia';


@Component({
  selector: 'app-masexperiencias',
  templateUrl: './masexperiencias.component.html',
  styleUrls: ['./masexperiencias.component.css']
})
export class MasexperienciasComponent implements OnInit {

  //ESTE ES EL TS DEL FORMULARIO PARA AGREGAR UNA NUEVA EXPERIENCIA

  //en este caso, para pasarselo al comp "e-experiencia.component"
  @Output() agregarExp: EventEmitter<Experiencia> = new EventEmitter();

  //Declaro e inicializo las variables que voy a recibir del template,
  //es decir, del formulario "masexperiencia"
  nombreE:string = "";
  empresa:string="";
  tarea:string = "";
  formato:string = "";

  constructor(private servExperiencia: ServExperienService) {}

  ngOnInit(): void {
  }

  //Metodo para crear el elemento que va a ser enviado a traves del "Output"
  //al componente "e-experiencia.component" para luego ser cargado a la DB
  clickEnAgregar() {
    const experiencia = {
      nombreE: this.nombreE,
      empresa: this.empresa,
      tarea: this.tarea,
      formato: this.formato
    };
    this.agregarExp.emit(experiencia);
  }
}


