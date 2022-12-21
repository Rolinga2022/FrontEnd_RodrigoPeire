import { Component, OnInit } from '@angular/core';
import { ServFormacionService } from 'src/app/servicios/formaciones/serv-formacion.service';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';
import { Academica } from 'src/app/model/academica/academica';
import { TokenService } from 'src/app/servicios/token/token.service';


@Component({
  selector: 'app-f-academica',
  templateUrl: './f-academica.component.html',
  styleUrls: ['./f-academica.component.css']
})
export class FAcademicaComponent implements OnInit {

  //Titulo
  titulocomponente: string = "Formacion Academica";

  //Para mostrar formulario de AGREGAR formacion academica
  mostrarFormulario:boolean = false;
  subscription?: Subscription;

  //inicializo la lista de formaciones academicas.
  formacion: Academica[] = [];


  constructor(private servAcademico:ServFormacionService, 
              private servInterfaz:ServInterfazService, 
              private tokenService:TokenService
              ) { 
    //Para ejecutar el servicio de alternar el formulario "AGREGAR". Y luego, el valor recibido se lo asigno a la variable mostrarFormulario
    this.subscription = this.servInterfaz.alternarFormFormacion().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
  }

  //Booleano para verificar que estoy logueado
  isLogged = false;

  ngOnInit(): void {

    //Para traer, desde el inicio, la lista con las formaciones academicas en la DB
    this.cargarFormAcad();

    //Condicion para verificar si estoy o no logueado
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged=false;
    }

  }

  //Metodo para desplegar el formulario de agregar nueva formacion academica
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarFormacion();
  }

 //Metodo para traer la lista de formaciones cargadas en la DB a traves del servicio academico
 cargarFormAcad():void{
  this.servAcademico.lista().subscribe(data=>{
    this.formacion = data;
  }
  )
}

 //Metodo para agregar una nueva formacion academica a la DB a traves del servicio academico
 agregarUnaFormAcad(formAcadAAgregar: Academica){
  this.servAcademico.save(formAcadAAgregar).subscribe(
    data=>{
      alert("Formacion academica creada");
      window.location.reload();
    }, err=> {
      alert("Hubo un fallo");
    }
  )
}

  //Metodo para eliminar un formacion de la DB
  delete(id?: number){
  if(id != undefined){
    this.servAcademico.delete(id).subscribe(
      data=>{
        this.cargarFormAcad();
      }, err=>{
        alert("No se pudo borrar la formacion academica");
      }
    )
  }
}

}
