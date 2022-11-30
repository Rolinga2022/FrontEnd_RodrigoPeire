import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from '../curso';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';
import { ServCursosycapService } from 'src/app/servicios/cursosycap/serv-cursosycap.service';
import { CURSOS } from '../simul-cursos';


@Component({
  selector: 'app-itemcursos',
  templateUrl: './itemcursos.component.html',
  styleUrls: ['./itemcursos.component.css']
})
export class ItemcursosComponent implements OnInit {

  @Input() curso: Curso = CURSOS[0];

  @Output() deleteCurso: EventEmitter<Curso> = new EventEmitter;


  //iconitos de editar y borrar
  faEdit=faEdit;
  faTimes=faTimes;

  //inicializo la lista de habilidades blandas.
  cursos: Curso[] = [];

  //Para mostrar formulario
  mostrarFormModif:boolean = false;
  subscription?: Subscription;
  clickEnBtn:boolean = false;

  constructor(private servInterfaz:ServInterfazService, private servCurso:ServCursosycapService) { 
    //lo siguiente es para mostrar o no el formulario de modificacion
    this.subscription = this.servInterfaz.alternarFormModifCursos().subscribe(valorRecibido=> this.mostrarFormModif = valorRecibido);
  }

  ngOnInit(): void {
  }

  borrarCurso(curso: Curso) {
    this.deleteCurso.emit(curso);
  }

  //LOS DOS METODOS A CONTINUACION TRABAJAN EN CONJUNTO PARA MODIFICAR
  modificarCurso(curso: Curso) {
    this.servCurso.idCursoEleg(curso.id)
    this.clickEnBtn = !this.clickEnBtn;
    this.servInterfaz.mostrarModificarCursos()
  }
  editar(cursoAModificar: Curso) {
    //console.log(experienciaAModificar);
    this.servCurso.editarCurso(cursoAModificar).subscribe();
    window.location.reload() 
  }

}
