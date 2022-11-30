import { Component, OnInit } from '@angular/core';
import { ServCursosycapService } from 'src/app/servicios/cursosycap/serv-cursosycap.service';
import { Curso } from './curso';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-i-cursosycap',
  templateUrl: './i-cursosycap.component.html',
  styleUrls: ['./i-cursosycap.component.css']
})
export class ICursosycapComponent implements OnInit {

  titulocomponente: string = "Cursos y Capacitaciones";

  mostrarFormulario:boolean = false;//para mostrar formulario
  subscription?: Subscription;//para mostrar formulario

  //inicializo la lista de tareas.
  cursos: Curso[] = [];

  constructor(private servCurso:ServCursosycapService, private servInterfaz:ServInterfazService) { 
    /*Lo siguiente, dentro del constructor, me ejecuta el servicio de alternar el formulario. Y luego, el valor recibido 
    se lo asigno a la variable mostrarFormulario*/
    this.subscription = this.servInterfaz.alternarFormCursos().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
   }

  ngOnInit(): void {
    this.servCurso.obtCursos().subscribe(datosObtenidos=>{
      this.cursos = datosObtenidos
    });
    /*los "datosObtenidos representan al retorno del metodo 'obtCursos'
     del servicio de cursos, es decir, la lista de cursos*/
  }

  //Para alternar el formulario de agregar
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarCursos();
  }

  elimCurso(curso:Curso) {

    this.servCurso.deleteCurso(curso).subscribe(cursoElegido=>{
      this.cursos = this.cursos.filter(cursoElegido=>cursoElegido.id !== curso.id);/*me devuelve un arreglo que que cumpla con 
      dicha condicion, es decir, que va a estar compuesto por los elementos cuyo id sean diferentes. Entonces, el elemento que yo seleccione 
      trae consigo un id, cuando compara con los id existentes uno de los elementos va a tener el mismo id que seleccione, entoces, como ese
      elemento no cumple con la condicion de id, lo aparta. Cuando finaliza, me devuleve un array con todos los elementos que tuvieron id
      diferente al que yo seleccione*/
    });
  }

  agregoCurso(curso: Curso) {
    this.servCurso.addCurso(curso).subscribe(cursoIngresado=>{
      this.cursos.push(cursoIngresado);
    });
  }

}
