import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Formacion } from '../formacion';

@Component({
  selector: 'app-modifacademica',
  templateUrl: './modifacademica.component.html',
  styleUrls: ['./modifacademica.component.css']
})
export class ModifacademicaComponent implements OnInit {

  //Para pasarle al elemento por fuera de "modifformacion", es decir, a la lista.
  @Output() modificarFormacion: EventEmitter<Formacion> = new EventEmitter();

  //voy a recibir desde el template, es decir, el formulario, lo siguiente:
  instituto:string = "";
  titulo:string = "";
  duracion:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  clickEnEditar() {
    if(this.instituto.length !== 0){
      const modificacionFormacion = {
        instituto: this.instituto,
        titulo: this.titulo,
        duracion: this.duracion
      }
      this.modificarFormacion.emit(modificacionFormacion);
      window.location.reload();
      } else {
        alert("No realizaste modificacion")
    }
  }

}
