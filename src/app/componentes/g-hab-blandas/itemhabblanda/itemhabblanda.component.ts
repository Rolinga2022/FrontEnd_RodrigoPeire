import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HabBlanda } from '../habblanda';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';
import { ServHabBlandaService } from 'src/app/servicios/hab-blandas/serv-hab-blanda.service';
import { BLANDAS }  from '../simul-habblandas'

@Component({
  selector: 'app-itemhabblanda',
  templateUrl: './itemhabblanda.component.html',
  styleUrls: ['./itemhabblanda.component.css']
})
export class ItemhabblandaComponent implements OnInit {

  @Input() habBlanda: HabBlanda = BLANDAS[0];

  @Output() deleteHabBlanda: EventEmitter<HabBlanda> = new EventEmitter;


  //iconitos de editar y borrar
  faEdit=faEdit;
  faTimes=faTimes;

  //inicializo la lista de habilidades blandas.
  habBlandas: HabBlanda[] = [];

  //Para mostrar formulario
  mostrarFormModif:boolean = false;
  subscription?: Subscription;
  clickEnBtn:boolean = false;


  constructor(private servInterfaz:ServInterfazService, private servHabBlanda:ServHabBlandaService) { 
    //lo siguiente es para mostrar o no el formulario de modificacion
    this.subscription = this.servInterfaz.alternarFormModifHabBlanda().subscribe(valorRecibido=> this.mostrarFormModif = valorRecibido);
  }

  ngOnInit(): void {
  }

  borrarHabBlanda(habBlanda: HabBlanda) {
    this.deleteHabBlanda.emit(habBlanda);
  }

  //LOS DOS METODOS A CONTINUACION TRABAJAN EN CONJUNTO PARA MODIFICAR
  modificarHabBlanda(habBlanda:HabBlanda) {
    this.servHabBlanda.idHAbBlanda(habBlanda.id)
    this.clickEnBtn = !this.clickEnBtn;
    this.servInterfaz.mostrarModificarHabBlanda()
  }
  editar(habBlandaAModificar: HabBlanda) {
    //console.log(experienciaAModificar);
    this.servHabBlanda.editarHAbBlanda(habBlandaAModificar).subscribe();
    window.location.reload() 
  }

  //Porcentaje de habilidad

  porcentajeHab(){
    const porcentaje = this.habBlanda.porcentaje + "%";
    return porcentaje;
  }
  
  

}
