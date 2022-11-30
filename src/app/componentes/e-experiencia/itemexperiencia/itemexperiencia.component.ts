import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from '../experiencia';
import { EXPERIENCIAS } from '../simul-experiencias';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ServExperienService } from 'src/app/servicios/experiencias/serv-experien.service';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-itemexperiencia',
  templateUrl: './itemexperiencia.component.html',
  styleUrls: ['./itemexperiencia.component.css']
})
export class ItemexperienciaComponent implements OnInit {

  @Input() experiencia: Experiencia = EXPERIENCIAS[0]; 

  @Output() deleteExperiencia: EventEmitter<Experiencia> = new EventEmitter;

  
   
  //iconitos de editar y borrar
  faEdit=faEdit;
  faTimes=faTimes;

  //inicializo la lista de tareas.
  experiencias: Experiencia[] = [];

  //Para mostrar formulario
  mostrarFormModif:boolean = false;
  subscription?: Subscription;
  clickEnBtn:boolean = false;
  


  constructor(private servExperiencia:ServExperienService, private servInterfaz:ServInterfazService) { 
    //lo siguiente es para mostrar o no el formulario de modificacion
    this.subscription = this.servInterfaz.alternarFormModif().subscribe(valorRecibido=> this.mostrarFormModif = valorRecibido);
  }

  ngOnInit(): void {
  }

  
  borrarExperiencia(experiencia: Experiencia) {
    this.deleteExperiencia.emit(experiencia);
  }

  
  //LOS DOS METODOS A CONTINUACION TRABAJAN EN CONJUNTO PARA MODIFICAR
  modificarExperiencia(experiencia:Experiencia) {
    this.servExperiencia.idExperiencia(experiencia.id)
    this.clickEnBtn = !this.clickEnBtn;
    this.servInterfaz.mostrarModificarExperiencia()
  }
  editar(experienciaAModificar: Experiencia) {
    //console.log(experienciaAModificar);
    this.servExperiencia.editarExperiencia(experienciaAModificar).subscribe();
    window.location.reload() 
  }

  
}
