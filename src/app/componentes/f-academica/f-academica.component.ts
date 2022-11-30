import { Component, OnInit } from '@angular/core';
import { ServFormacionService } from 'src/app/servicios/formaciones/serv-formacion.service';
import { Formacion } from './formacion';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-f-academica',
  templateUrl: './f-academica.component.html',
  styleUrls: ['./f-academica.component.css']
})
export class FAcademicaComponent implements OnInit {

  titulocomponente: string = "Formacion Academica";

  mostrarFormulario:boolean = false;//para mostrar formulario
  subscription?: Subscription;//para mostrar formulario

  //inicializo la lista de tareas.
  formaciones: Formacion[] = [];


  constructor(private servFormacion:ServFormacionService, private servInterfaz:ServInterfazService) { 
    /*Lo siguiente, dentro del constructor, me ejecuta el servicio de alternar el formulario. Y luego, el valor recibido 
    se lo asigno a la variable mostrarFormulario*/
    this.subscription = this.servInterfaz.alternarFormFormacion().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
  }

  ngOnInit(): void {
    this.servFormacion.obtFormaciones().subscribe(datosObtenidos=>{
      this.formaciones = datosObtenidos
    });
    /*los "datosObtenidos representan al retorno del metodo 'obtFormaciones'
     del servicio de Formacion, es decir, la lista de formacion*/
  }

  //Para alternar el formulario de agregar
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarFormacion();
  }

  elimFormacion(formacion:Formacion) {

    this.servFormacion.deleteFormacion(formacion).subscribe(formacionElegida=>{
      this.formaciones = this.formaciones.filter(formacionElegida=>formacionElegida.id !== formacion.id);/*me devuelve un arreglo que que cumpla con 
      dicha condicion, es decir, que va a estar compuesto por los elementos cuyo id sean diferentes. Entonces, el elemento que yo seleccione 
      trae consigo un id, cuando compara con los id existentes uno de los elementos va a tener el mismo id que seleccione, entoces, como ese
      elemento no cumple con la condicion de id, lo aparta. Cuando finaliza, me devuleve un array con todos los elementos que tuvieron id
      diferente al que yo seleccione*/
    });
   
  }

  agregoFormacion(formacion: Formacion) {
    this.servFormacion.addFormacion(formacion).subscribe(formacionIngresada=>{
      this.formaciones.push(formacionIngresada);
    });
  }

}
