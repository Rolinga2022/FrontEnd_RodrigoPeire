import { Component, OnInit } from '@angular/core';
import { ServHabBlandaService } from 'src/app/servicios/hab-blandas/serv-hab-blanda.service';
import { HabBlanda } from './habblanda';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-g-hab-blandas',
  templateUrl: './g-hab-blandas.component.html',
  styleUrls: ['./g-hab-blandas.component.css']
})
export class GHabBlandasComponent implements OnInit {

  titulocomponente: string = "Habilidades Blandas";

  mostrarFormulario:boolean = false;//para mostrar formulario
  subscription?: Subscription;//para mostrar formulario

  //inicializo la lista de tareas.
  habBlandas: HabBlanda[] = [];



  constructor(private servHabBlanda:ServHabBlandaService, private servInterfaz:ServInterfazService) { 
    /*Lo siguiente, dentro del constructor, me ejecuta el servicio de alternar el formulario. Y luego, el valor recibido 
    se lo asigno a la variable mostrarFormulario*/
    this.subscription = this.servInterfaz.alternarFormHabBlanda().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
  }

  ngOnInit(): void {
    this.servHabBlanda.obtHabBlandas().subscribe(datosObtenidos=>{
      this.habBlandas = datosObtenidos
    });
    /*los "datosObtenidos representan al retorno del metodo 'obtHabBlandas'
     del servicio de habblandas, es decir, la lista de habilidades blandas*/
  }

  //Para alternar el formulario de agregar
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarHabBlanda();
  }

  elimHabBlanda(habBlanda:HabBlanda) {

    this.servHabBlanda.deleteHAbBlanda(habBlanda).subscribe(habBlandaElegida=>{
      this.habBlandas = this.habBlandas.filter(habBlandaElegida=>habBlandaElegida.id !== habBlanda.id);/*me devuelve un arreglo que que cumpla con 
      dicha condicion, es decir, que va a estar compuesto por los elementos cuyo id sean diferentes. Entonces, el elemento que yo seleccione 
      trae consigo un id, cuando compara con los id existentes uno de los elementos va a tener el mismo id que seleccione, entoces, como ese
      elemento no cumple con la condicion de id, lo aparta. Cuando finaliza, me devuleve un array con todos los elementos que tuvieron id
      diferente al que yo seleccione*/
    });
  }

  agregoHabBlanda(habBlanda: HabBlanda) {
    this.servHabBlanda.addHAbBlanda(habBlanda).subscribe(habBlandaIngresada=>{
      this.habBlandas.push(habBlandaIngresada);
    });
  }

}
