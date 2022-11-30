import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HabDura } from '../habdura';
import { Subscription } from 'rxjs';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';

@Component({
  selector: 'app-mashabdura',
  templateUrl: './mashabdura.component.html',
  styleUrls: ['./mashabdura.component.css']
})
export class MashabduraComponent implements OnInit {

  //Para pasarle al elemento por fuera de "masahabblanda", es decir, a la lista.
  @Output() agregarNewHabDura: EventEmitter<HabDura> = new EventEmitter();

  //voy a recibir desde el template, es decir, el formulario, lo siguiente:
  habilidad:string = "";
  porcentaje:number = 0;

  //para mostrar o no el formulario
  mostrarFormulario:boolean = false;
  subscription?: Subscription;

  constructor(private servInterfaz:ServInterfazService) {
    this.subscription = this.servInterfaz.alternarFormHabDura().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
   }

  ngOnInit(): void {
  }

  clickEnAgregar() {
    if(this.habilidad.length !== 0){
      const nuevaHabDura = {
        habilidad: this.habilidad,
        porcentaje: this.porcentaje,
      }
      this.agregarNewHabDura.emit(nuevaHabDura);
      window.location.reload();
      } else {
        alert("NO INGRESASTE NINGUNA HABILIDAD DURA")
      }
  }

}
