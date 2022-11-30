import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Curso } from '../curso';
import { Subscription } from 'rxjs';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';

@Component({
  selector: 'app-mascursos',
  templateUrl: './mascursos.component.html',
  styleUrls: ['./mascursos.component.css']
})
export class MascursosComponent implements OnInit {


  //Para pasarle al elemento por fuera de "masahabblanda", es decir, a la lista.
  @Output() agregarNewCurso: EventEmitter<Curso> = new EventEmitter();

  //voy a recibir desde el template, es decir, el formulario, lo siguiente:
  nombre:string = "";
  institucion:string = "";
  tipo:string = "";
  year:string = "";

  //para mostrar o no el formulario
  mostrarFormulario:boolean = false;
  subscription?: Subscription;



  constructor(private servInterfaz:ServInterfazService) {
    this.subscription = this.servInterfaz.alternarFormCursos().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
   }

  ngOnInit(): void {
  }

  clickEnAgregar() {
    if(this.nombre.length !== 0){
      const nuevoCurso = {
        nombre: this.nombre,
        institucion: this.institucion,
        tipo: this.tipo,
        year: this.year
      }
      this.agregarNewCurso.emit(nuevoCurso);
      window.location.reload();
      } else {
        alert("NO INGRESASTE NINGUN Curso o Capacitacion")
      }
  }

}
