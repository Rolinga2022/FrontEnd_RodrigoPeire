import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Experiencia } from '../experiencia';
import { Subscription } from 'rxjs'
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';

@Component({
  selector: 'app-masexperiencias',
  templateUrl: './masexperiencias.component.html',
  styleUrls: ['./masexperiencias.component.css']
})
export class MasexperienciasComponent implements OnInit {

  //Para pasarle al elemento por fuera de "masexperiencias", es decir, a la lista.
  @Output() agregarNewExperiencia: EventEmitter<Experiencia> = new EventEmitter();


  //voy a recibir desde el template, es decir, el formulario, lo siguiente:
  nombre:string = "";
  empresa:string="";
  tarea:string = "";
  formato:string = "";

  mostrarFormulario:boolean = false;
  subscription?: Subscription;

  constructor(private servInterfaz:ServInterfazService) { 
    this.subscription = this.servInterfaz.alternarFormExp().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
  }

  ngOnInit(): void {
  }

  clickEnAgregar() {
    if(this.nombre.length !== 0){
      const nuevaExperiencia = {
        nombre: this.nombre,
        empresa: this.empresa,
        tarea: this.tarea,
        formato: this.formato
      }
      this.agregarNewExperiencia.emit(nuevaExperiencia);
      window.location.reload();
      } else {
        alert("NO INGRESASTE NINGUNA EXPERIENCIA")
      }
  }

}
