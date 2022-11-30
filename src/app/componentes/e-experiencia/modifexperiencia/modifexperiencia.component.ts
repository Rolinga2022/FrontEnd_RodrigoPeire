import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Experiencia } from '../experiencia';

@Component({
  selector: 'app-modifexperiencia',
  templateUrl: './modifexperiencia.component.html',
  styleUrls: ['./modifexperiencia.component.css']
})
export class ModifexperienciaComponent implements OnInit {

  //Para pasarle al elemento por fuera de "modifexperiencia", es decir, a la lista.
  @Output() modificarExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  //voy a recibir desde el template, es decir, el formulario, lo siguiente:
  nombre:string = "";
  empresa:string="";
  tarea:string = "";
  formato:string = "";


  constructor() { }

  ngOnInit(): void {
  }

  clickEnEditar() {
    if(this.nombre.length !== 0){
      const modificacionExperiencia = {
        nombre: this.nombre,
        empresa: this.empresa,
        tarea: this.tarea,
        formato: this.formato
      }
      this.modificarExperiencia.emit(modificacionExperiencia);
      window.location.reload();
      } else {
        alert("No realizaste modificacion")
    }
  }

}

