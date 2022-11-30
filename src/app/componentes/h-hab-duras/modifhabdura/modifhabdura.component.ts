import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HabDura } from '../habdura';

@Component({
  selector: 'app-modifhabdura',
  templateUrl: './modifhabdura.component.html',
  styleUrls: ['./modifhabdura.component.css']
})
export class ModifhabduraComponent implements OnInit {

  //Para pasarle al elemento por fuera de "modifHabDura", es decir, a la lista.
  @Output() modificarHabDura: EventEmitter<HabDura> = new EventEmitter();

  //voy a recibir desde el template, es decir, el formulario, lo siguiente:
  habilidad:string = "";
  porcentaje:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clickEnEditar() {
    if(this.habilidad.length !== 0){
      const modificacionHabDura = {
        habilidad: this.habilidad,
        porcentaje: this.porcentaje,
      }
      this.modificarHabDura.emit(modificacionHabDura);
      window.location.reload();
      } else {
        alert("No realizaste modificacion")
    }
  }

}
