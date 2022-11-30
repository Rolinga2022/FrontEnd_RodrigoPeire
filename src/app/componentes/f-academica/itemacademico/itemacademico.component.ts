import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Formacion } from '../formacion';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';
import { ServFormacionService } from 'src/app/servicios/formaciones/serv-formacion.service';
import { FORMACIONES } from '../simul-formaciones';

@Component({
  selector: 'app-itemacademico',
  templateUrl: './itemacademico.component.html',
  styleUrls: ['./itemacademico.component.css']
})
export class ItemacademicoComponent implements OnInit {

  @Input() formacion: Formacion = FORMACIONES[0];

  @Output() deleteFormacion: EventEmitter<Formacion> = new EventEmitter;


  //iconitos de editar y borrar
  faEdit=faEdit;
  faTimes=faTimes;

  //inicializo la lista de formaciones.
  experiencias: Formacion[] = [];

  //Para mostrar formulario
  mostrarFormModif:boolean = false;
  subscription?: Subscription;
  clickEnBtn:boolean = false;



  constructor(private servInterfaz:ServInterfazService, private servFormacion:ServFormacionService) { 
    //lo siguiente es para mostrar o no el formulario de modificacion
    this.subscription = this.servInterfaz.alternarFormModifFormacion().subscribe(valorRecibido=> this.mostrarFormModif = valorRecibido);
  }

  ngOnInit(): void {
  }

  borrarFormacion(formacion: Formacion) {
    this.deleteFormacion.emit(formacion);
  }

  //LOS DOS METODOS A CONTINUACION TRABAJAN EN CONJUNTO PARA MODIFICAR
  modificarFormacion(formacion:Formacion) {
    this.servFormacion.idAcademico(formacion.id)
    this.clickEnBtn = !this.clickEnBtn;
    this.servInterfaz.mostrarModificarFormacion()
  }
  editar(formacionAModificar: Formacion) {
    //console.log(experienciaAModificar);
    this.servFormacion.editarFormacion(formacionAModificar).subscribe();
    window.location.reload() 
  }

}
