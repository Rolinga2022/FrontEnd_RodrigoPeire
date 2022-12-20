import { Component, OnInit } from '@angular/core';
import { ServExperienService } from 'src/app/servicios/experiencias/serv-experien.service';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/servicios/token/token.service';
import { Experiencia } from 'src/app/model/experiencia/experiencia';


@Component({
  selector: 'app-e-experiencia',
  templateUrl: './e-experiencia.component.html',
  styleUrls: ['./e-experiencia.component.css']
})
export class EExperienciaComponent implements OnInit {

  //Titulo 
  titulocomponente: string = "Experiencia";

  //Para mostrar formulario de AGREGAR experiencia
  mostrarFormulario:boolean = false;
  subscription?: Subscription;

  //Inicializo la lista de Experiencias
  expe: Experiencia[] = [];


  constructor(private servExperiencia:ServExperienService,
              private servInterfaz:ServInterfazService,
              private tokenService:TokenService,
              ) { 
    //Para ejecutar el servicio de alternar el formulario "AGREGAR". Y luego, el valor recibido se lo asigno a la variable mostrarFormulario
    this.subscription = this.servInterfaz.alternarFormExp().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
  }

  //Booleano para verificar que estoy logueado
  isLogged = false;

  ngOnInit(): void {

    //Para traer, desde el inicio, la lista con las experiencias en la DB
    this.cargarExperiencia();

    //Condicion para verificar si estoy o no logueado
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged=false;
    }

  }

  //Metodo para desplegar el formulario de agregar nueva experiencia
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarExperiencia();
  }

  //Metodo para traer la lista de experiencias cargadas en la DB a traves del servicio experiencia
  cargarExperiencia():void{
    this.servExperiencia.lista().subscribe(data=>{
      this.expe = data;
    }
    )
  }

  //Metodo para agregar una nueva experiencia a la DB a traves del servicio experiencia
  agregarUnaExp(expAgregar: Experiencia){
    this.servExperiencia.save(expAgregar).subscribe(
      data=>{
        alert("Experiencia creada");
        window.location.reload();
      }, err=> {
        alert("hubo un fallo");
      }
    )
  }

 //Metodo para eliminar un experiencia de la DB
  delete(id?: number){
    if(id != undefined){
      this.servExperiencia.delete(id).subscribe(
        data=>{
          this.cargarExperiencia();
        }, err=>{
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
