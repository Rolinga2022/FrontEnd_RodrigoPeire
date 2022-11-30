import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HabBlanda } from '../habblanda';

@Component({
  selector: 'app-modifhabblanda',
  templateUrl: './modifhabblanda.component.html',
  styleUrls: ['./modifhabblanda.component.css']
})
export class ModifhabblandaComponent implements OnInit {

  //Para pasarle al elemento por fuera de "modifHabBlanda", es decir, a la lista.
  @Output() modificarHabBlanda: EventEmitter<HabBlanda> = new EventEmitter();

  //voy a recibir desde el template, es decir, el formulario, lo siguiente:
  habilidad:string = "";
  porcentaje:number = 0;



  constructor() { }

  ngOnInit(): void {
  }

  clickEnEditar() {
    if(this.habilidad.length !== 0){
      const modificacionHabBlanda = {
        habilidad: this.habilidad,
        porcentaje: this.porcentaje,
      }
      this.modificarHabBlanda.emit(modificacionHabBlanda);
      window.location.reload();
      } else {
        alert("No realizaste modificacion")
    }
  }

}
