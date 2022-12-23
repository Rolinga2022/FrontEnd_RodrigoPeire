import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SobreMi } from 'src/app/model/sobre-mi/sobre-mi';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { ServSobreMiService } from 'src/app/servicios/sobre-mi/serv-sobre-mi.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-d-sobre-mi',
  templateUrl: './d-sobre-mi.component.html',
  styleUrls: ['./d-sobre-mi.component.css']
})
export class DSobreMiComponent implements OnInit {

  //Para mostrar formulario de AGREGAR dato
  mostrarFormulario:boolean = false;
  subscription?: Subscription;

  //Inicializo la lista de datos
  datos: SobreMi[] = [];

  constructor(private servSobreMi:ServSobreMiService,
              private servInterfaz:ServInterfazService,
              private tokenService:TokenService) { 
    //Para ejecutar el servicio de alternar el formulario "AGREGAR". Y luego, el valor recibido se lo asigno a la variable mostrarFormulario
    this.subscription = this.servInterfaz.alternarFormDato().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);        
  }

  //Booleano para verificar que estoy logueado
  isLogged = false;

  ngOnInit(): void {

    //Para traer, desde el inicio, la lista con los datos en la DB
    this.cargarDato();

    //Condicion para verificar si estoy o no logueado
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged=false;
    }

  }

  //Metodo para desplegar el formulario de agregar nuevo dato
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarDato();
  }

  //Metodo para traer la lista de datos cargadas en la DB a traves del serviciosobremi
  cargarDato():void{
    this.servSobreMi.lista().subscribe(data=>{
      this.datos = data;
    }
    )
  }

  //Metodo para agregar un nuevo dato a la DB a traves del servicio descrip
  agregarUnDato(datoAgregar: SobreMi){
    this.servSobreMi.save(datoAgregar).subscribe(
      data=>{
        alert("Dato creado");
        window.location.reload();
      }, err=> {
        alert("hubo un fallo");
      }
    )
  }

  //Metodo para eliminar un dato de la DB
  delete(id?: number){
    if(id != undefined){
      this.servSobreMi.delete(id).subscribe(
        data=>{
          this.cargarDato();
        }, err=>{
          alert("No se pudo borrar el dato");
        }
      )
    }
  }

}
