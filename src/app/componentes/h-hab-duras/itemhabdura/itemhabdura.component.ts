import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HabDura } from '../habdura';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';
import { ServHabDuraService } from 'src/app/servicios/hab-duras/serv-hab-dura.service';
import { DURAS } from '../simul-habduras';

@Component({
  selector: 'app-itemhabdura',
  templateUrl: './itemhabdura.component.html',
  styleUrls: ['./itemhabdura.component.css']
})
export class ItemhabduraComponent implements OnInit {

  @Input() habDura: HabDura = DURAS[0];

  @Output() deleteHabDura: EventEmitter<HabDura> = new EventEmitter;


  //iconitos de editar y borrar
  faEdit=faEdit;
  faTimes=faTimes;

  //inicializo la lista de habilidades blandas.
  habDuras: HabDura[] = [];

  //Para mostrar formulario
  mostrarFormModif:boolean = false;
  subscription?: Subscription;
  clickEnBtn:boolean = false;


  constructor(private servInterfaz:ServInterfazService, private servHabDura:ServHabDuraService) { 
    //lo siguiente es para mostrar o no el formulario de modificacion
    this.subscription = this.servInterfaz.alternarFormModifHabDura().subscribe(valorRecibido=> this.mostrarFormModif = valorRecibido);
  }

  ngOnInit(): void {
  }

  borrarHabDura(habDura: HabDura) {
    this.deleteHabDura.emit(habDura);
  }

  //LOS DOS METODOS A CONTINUACION TRABAJAN EN CONJUNTO PARA MODIFICAR
  modificarHabDura(habDura: HabDura) {
    this.servHabDura.idHAbDura(habDura.id)
    this.clickEnBtn = !this.clickEnBtn;
    this.servInterfaz.mostrarModificarHabDura()
  }
  editar(habDuraAModificar: HabDura) {
    //console.log(experienciaAModificar);
    this.servHabDura.editarHAbDura(habDuraAModificar).subscribe();
    window.location.reload() 
  }

  //Porcentaje de habilidad

  porcentajeHab(){
    const porcentaje = this.habDura.porcentaje + "%";
    return porcentaje;
  }

}
