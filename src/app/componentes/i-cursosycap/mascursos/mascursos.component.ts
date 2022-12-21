import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CursosYCap } from 'src/app/model/cursosycap/cursosycap';
import { ServCursosycapService } from 'src/app/servicios/cursosycap/serv-cursosycap.service';


@Component({
  selector: 'app-mascursos',
  templateUrl: './mascursos.component.html',
  styleUrls: ['./mascursos.component.css']
})
export class MascursosComponent implements OnInit {

  //ESTE ES EL TS DEL FORMULARIO PARA AGREGAR un nuevo curso

  //en este caso, para pasarselo al componenete padre
  @Output() agregarCurso: EventEmitter<CursosYCap> = new EventEmitter();

  //Declaro e inicializo las variables que voy a recibir del template,
  //es decir, del formulario "mascursosycap"
  nombreCurso:string = "";
  institucion:string="";
  tipo:string = "";
  year:string = "";

  constructor(private servCursos:ServCursosycapService) {
    
   }

  ngOnInit(): void {
  }

  //Metodo para crear el elemento que va a ser enviado a traves del "Output"
  //al componente "f-academica.component" para luego ser cargado a la DB
  clickEnAgregar() {
    const curso = {
      nombreCurso: this.nombreCurso,
      institucion: this.institucion,
      tipo: this.tipo,
      year: this.year
    };
    this.agregarCurso.emit(curso);
  }



}
