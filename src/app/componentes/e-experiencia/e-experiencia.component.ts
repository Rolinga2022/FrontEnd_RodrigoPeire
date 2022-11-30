import { Component, OnInit } from '@angular/core';
import { ServExperienService } from 'src/app/servicios/experiencias/serv-experien.service';
import { Experiencia } from './experiencia';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-e-experiencia',
  templateUrl: './e-experiencia.component.html',
  styleUrls: ['./e-experiencia.component.css']
})
export class EExperienciaComponent implements OnInit {

  titulocomponente: string = "Experiencia";


  mostrarFormulario:boolean = false;//para mostrar formulario
  subscription?: Subscription;//para mostrar formulario


  //inicializo la lista de tareas.
  experiencias: Experiencia[] = [];

  constructor(private servExperiencia:ServExperienService, private servInterfaz:ServInterfazService) { 

    /*Lo siguiente, dentro del constructor, me ejecuta el servicio de alternar el formulario. Y luego, el valor recibido 
    se lo asigno a la variable mostrarFormulario*/
    this.subscription = this.servInterfaz.alternarFormExp().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
  }

  ngOnInit(): void {
    this.servExperiencia.obtExperiencias().subscribe(datosObtenidos=>{
      this.experiencias = datosObtenidos
    });
    /*los "datosObtenidos representan al retorno del metodo 'obtExperiencias'
     del servicio de experiencia, es decir, la lista de expriencias*/
  }

  //Para alternar el formulario de agregar
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarExperiencia();
  }

  elimExperiencia(experiencia:Experiencia) {

    this.servExperiencia.deleteExperiencia(experiencia).subscribe(expElegida=>{
      this.experiencias = this.experiencias.filter(expElegida=>expElegida.id !== experiencia.id);/*me devuelve un arreglo que que cumpla con 
      dicha condicion, es decir, que va a estar compuesto por los elementos cuyo id sean diferentes. Entonces, el elemento que yo seleccione 
      trae consigo un id, cuando compara con los id existentes uno de los elementos va a tener el mismo id que seleccione, entoces, como ese
      elemento no cumple con la condicion de id, lo aparta. Cuando finaliza, me devuleve un array con todos los elementos que tuvieron id
      diferente al que yo seleccione*/
    });

  }

  agregoExperiencia(experiencia: Experiencia) {
    this.servExperiencia.addExperiencia(experiencia).subscribe(expIngresada=>{
      this.experiencias.push(expIngresada);
    });
  }

}
