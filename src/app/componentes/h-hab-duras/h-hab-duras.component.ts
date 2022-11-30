import { Component, OnInit } from '@angular/core';
import { ServHabDuraService } from 'src/app/servicios/hab-duras/serv-hab-dura.service';
import { HabDura } from './habdura';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-h-hab-duras',
  templateUrl: './h-hab-duras.component.html',
  styleUrls: ['./h-hab-duras.component.css']
})
export class HHabDurasComponent implements OnInit {

  titulocomponente: string = "Habilidades Duras";

  mostrarFormulario:boolean = false;//para mostrar formulario
  subscription?: Subscription;//para mostrar formulario

  //inicializo la lista de tareas.
  habDuras: HabDura[] = [];

  constructor(private servHabDura:ServHabDuraService, private servInterfaz:ServInterfazService) { 
    /*Lo siguiente, dentro del constructor, me ejecuta el servicio de alternar el formulario. Y luego, el valor recibido 
    se lo asigno a la variable mostrarFormulario*/
    this.subscription = this.servInterfaz.alternarFormHabDura().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
  }

  ngOnInit(): void {
    this.servHabDura.obtHabDuras().subscribe(datosObtenidos=>{
      this.habDuras = datosObtenidos
    });
    /*los "datosObtenidos representan al retorno del metodo 'obtHabDuras'
     del servicio de habDuras, es decir, la lista de habilidades duras*/
  }

  //Para alternar el formulario de agregar
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarHabDura();
  }

  elimHabDura(habDura:HabDura) {

    this.servHabDura.deleteHAbDura(habDura).subscribe(habDuraElegida=>{
      this.habDuras = this.habDuras.filter(habDuraElegida=>habDuraElegida.id !== habDura.id);/*me devuelve un arreglo que que cumpla con 
      dicha condicion, es decir, que va a estar compuesto por los elementos cuyo id sean diferentes. Entonces, el elemento que yo seleccione 
      trae consigo un id, cuando compara con los id existentes uno de los elementos va a tener el mismo id que seleccione, entoces, como ese
      elemento no cumple con la condicion de id, lo aparta. Cuando finaliza, me devuleve un array con todos los elementos que tuvieron id
      diferente al que yo seleccione*/
    });
  }

  agregoHabDura(habDura: HabDura) {
    this.servHabDura.addHAbDura(habDura).subscribe(habDuraIngresada=>{
      this.habDuras.push(habDuraIngresada);
    });
  }

}
