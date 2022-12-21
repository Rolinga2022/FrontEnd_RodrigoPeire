import { Component, OnInit } from '@angular/core';
import { ServCursosycapService } from 'src/app/servicios/cursosycap/serv-cursosycap.service';

import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';
import { CursosYCap } from 'src/app/model/cursosycap/cursosycap';
import { TokenService } from 'src/app/servicios/token/token.service';


@Component({
  selector: 'app-i-cursosycap',
  templateUrl: './i-cursosycap.component.html',
  styleUrls: ['./i-cursosycap.component.css']
})
export class ICursosycapComponent implements OnInit {

  //Titulo
  titulocomponente: string = "Cursos y Capacitaciones";

  //Para mostrar formulario de AGREGAR
  mostrarFormulario:boolean = false;
  subscription?: Subscription;

  //inicializo la lista de cursos.
  curso: CursosYCap[] = [];

  constructor(private servCursos:ServCursosycapService, 
              private servInterfaz:ServInterfazService, 
              private tokenService:TokenService) { 
    //Para ejecutar el servicio de alternar el formulario "AGREGAR". Y luego, el valor recibido se lo asigno a la variable mostrarFormulario
    this.subscription = this.servInterfaz.alternarFormCursos().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
   }

  //Booleano para verificar que estoy logueado
  isLogged = false;

  ngOnInit(): void {
    
    //Para traer, desde el inicio, la lista con cursos en la DB
    this.cargarCursosYCap();

    //Condicion para verificar si estoy o no logueado
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged=false;
    }

  }

  //Para alternar el formulario de agregar
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarCursos();
  }

  //Metodo para traer la lista de formaciones cargadas en la DB a traves del servicio academico
  cargarCursosYCap():void{
    this.servCursos.lista().subscribe(data=>{
    this.curso = data;
    }
    )
  }

  //Metodo para agregar unnuevo curso a la DB a traves del serviciocurso
 agregarUnCurso(cursoAAgregar: CursosYCap){
  this.servCursos.save(cursoAAgregar).subscribe(
      data=>{
      alert("Curso/Capacitacion creado");
      window.location.reload();
      }, err=> {
      alert("Hubo un fallo");
      }
   )
  }

  //Metodo para eliminar un formacion de la DB
  delete(id?: number){
    if(id != undefined){
      this.servCursos.delete(id).subscribe(
        data=>{
          this.cargarCursosYCap();
        }, err=>{
          alert("No se pudo borrar el curso/capacitacion");
        }
      )
    }
  }

 

}
