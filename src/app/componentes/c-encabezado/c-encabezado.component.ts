import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona/persona.model';
import { ServPersonaService } from 'src/app/servicios/persona/serv-persona.service';


@Component({
  selector: 'app-c-encabezado',
  templateUrl: './c-encabezado.component.html',
  styleUrls: ['./c-encabezado.component.css']
})
export class CEncabezadoComponent implements OnInit {

  persona: persona = new persona('','','');

  constructor(public personaService: ServPersonaService) { }

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {this.persona = data})
    

  }

}
