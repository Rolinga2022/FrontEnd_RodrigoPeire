import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Formacion } from '../formacion';
import { Subscription } from 'rxjs';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';


@Component({
  selector: 'app-masacademica',
  templateUrl: './masacademica.component.html',
  styleUrls: ['./masacademica.component.css']
})
export class MasacademicaComponent implements OnInit {

  //Para pasarle al elemento por fuera de "masacademica", es decir, a la lista.
  @Output() agregarNewFormacion: EventEmitter<Formacion> = new EventEmitter();


  //voy a recibir desde el template, es decir, el formulario, lo siguiente:
  instituto:string = "";
  titulo:string = "";
  duracion:string = "";


  //para mostrar o no el formulario
  mostrarFormulario:boolean = false;
  subscription?: Subscription;

  constructor(private servInterfaz:ServInterfazService) {
    this.subscription = this.servInterfaz.alternarFormFormacion().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
   }

  ngOnInit(): void {
  }

  clickEnAgregar() {
    if(this.instituto.length !== 0){
      const nuevaFormacion = {
        instituto: this.instituto,
        titulo: this.titulo,
        duracion: this.duracion
      }
      this.agregarNewFormacion.emit(nuevaFormacion);
      window.location.reload();
      } else {
        alert("NO INGRESASTE NINGUNA FORMACION")
      }
  }

}
