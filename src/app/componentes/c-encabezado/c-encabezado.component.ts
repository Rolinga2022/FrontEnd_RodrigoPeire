import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Descripcion } from 'src/app/model/descripcion-pers/descripcion-pers';
import { persona } from 'src/app/model/persona/persona.model';
import { ServDescripcionService } from 'src/app/servicios/descripcion-pers/serv-descripcion.service';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { ServPersonaService } from 'src/app/servicios/persona/serv-persona.service';
import { TokenService } from 'src/app/servicios/token/token.service';


@Component({
  selector: 'app-c-encabezado',
  templateUrl: './c-encabezado.component.html',
  styleUrls: ['./c-encabezado.component.css']
})
export class CEncabezadoComponent implements OnInit {

  persona: persona = new persona('','','');

  //Para mostrar formulario de AGREGAR descripcion
  mostrarFormulario:boolean = false;
  subscription?: Subscription;

  //Inicializo la lista de Experiencias
  descripcion: Descripcion[] = [];

  constructor(public personaService: ServPersonaService,
              private servDescripcion:ServDescripcionService,
              private servInterfaz:ServInterfazService,
              private tokenService:TokenService) { 

    //Para ejecutar el servicio de alternar el formulario "AGREGAR". Y luego, el valor recibido se lo asigno a la variable mostrarFormulario
    this.subscription = this.servInterfaz.alternarFormDescrip().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);

  }

  //Booleano para verificar que estoy logueado
  isLogged = false;



  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {this.persona = data});

    //Para traer, desde el inicio, la lista con las experiencias en la DB
    this.cargarDescripcion();

    //Condicion para verificar si estoy o no logueado
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged=false;
    }
    
  }
  //Metodo para desplegar el formulario de agregar nueva descripcion
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarDescripcion();
  }

  //Metodo para traer la lista de descripciones cargadas en la DB a traves del servicio experiencia
  cargarDescripcion():void{
    this.servDescripcion.lista().subscribe(data=>{
      this.descripcion = data;
    }
    )
  }

  //Metodo para agregar una nueva descripcion a la DB a traves del servicio descrip
  agregarUnaDesc(descripAgregar: Descripcion){
    this.servDescripcion.save(descripAgregar).subscribe(
      data=>{
        alert("Descripcion creada");
        window.location.reload();
      }, err=> {
        alert("hubo un fallo");
      }
    )
  }

  //Metodo para eliminar un experiencia de la DB
  delete(id?: number){
    if(id != undefined){
      this.servDescripcion.delete(id).subscribe(
        data=>{
          this.cargarDescripcion();
        }, err=>{
          alert("No se pudo borrar la descripcion");
        }
      )
    }
  }

}
