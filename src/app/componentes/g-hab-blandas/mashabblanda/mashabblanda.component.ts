import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HabBlanda } from '../habblanda';
import { Subscription } from 'rxjs';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';

@Component({
  selector: 'app-mashabblanda',
  templateUrl: './mashabblanda.component.html',
  styleUrls: ['./mashabblanda.component.css']
})
export class MashabblandaComponent implements OnInit {

  //Para pasarle al elemento por fuera de "masahabblanda", es decir, a la lista.
  @Output() agregarNewHabBlanda: EventEmitter<HabBlanda> = new EventEmitter();

  //voy a recibir desde el template, es decir, el formulario, lo siguiente:
  habilidad:string = "";
  porcentaje:number = 0;

  //para mostrar o no el formulario
  mostrarFormulario:boolean = false;
  subscription?: Subscription;
  

  constructor(private servInterfaz:ServInterfazService) { 
    this.subscription = this.servInterfaz.alternarFormHabBlanda().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
  }

  ngOnInit(): void {
  }

  clickEnAgregar() {
    if(this.habilidad.length !== 0){
      const nuevaHabBlanda = {
        habilidad: this.habilidad,
        porcentaje: this.porcentaje,
      }
      this.agregarNewHabBlanda.emit(nuevaHabBlanda);
      window.location.reload();
      } else {
        alert("NO INGRESASTE NINGUNA HABILIDAD BLANDA")
      }
  }

}
