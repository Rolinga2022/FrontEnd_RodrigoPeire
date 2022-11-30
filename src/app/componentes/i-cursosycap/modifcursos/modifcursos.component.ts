import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-modifcursos',
  templateUrl: './modifcursos.component.html',
  styleUrls: ['./modifcursos.component.css']
})
export class ModifcursosComponent implements OnInit {

  //Para pasarle al elemento por fuera de "modifHabDura", es decir, a la lista.
  @Output() modificarCurso: EventEmitter<Curso> = new EventEmitter();

  //voy a recibir desde el template, es decir, el formulario, lo siguiente:
  nombre:string = "";
  institucion:string = "";
  tipo:string = "";
  year:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  clickEnEditar() {
    if(this.nombre.length !== 0){
      const modificacionCurso = {
        nombre: this.nombre,
        institucion: this.institucion,
        tipo: this.tipo,
        year: this.year,
      }
      this.modificarCurso.emit(modificacionCurso);
      window.location.reload();
      } else {
        alert("No realizaste modificacion")
    }
  }

}
