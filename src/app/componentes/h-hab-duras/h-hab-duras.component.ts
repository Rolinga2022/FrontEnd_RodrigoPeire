import { Component, OnInit } from '@angular/core';
import { ServHabDuraService } from 'src/app/servicios/hab-duras/serv-hab-dura.service';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';
import { HabDura } from 'src/app/model/hab-dura/hab-dura';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-h-hab-duras',
  templateUrl: './h-hab-duras.component.html',
  styleUrls: ['./h-hab-duras.component.css']
})
export class HHabDurasComponent implements OnInit {

  //titulo
  titulocomponente: string = "Habilidades Duras";

  //Para mostrar formulario de AGREGAR
  mostrarFormulario:boolean = false;
  subscription?: Subscription;

  //inicializo la lista de hab Dura.
  habDuras: HabDura[] = [];

  constructor(private servHabDura:ServHabDuraService, 
              private servInterfaz:ServInterfazService,
              private tokenService:TokenService) { 
    //Para ejecutar el servicio de alternar el formulario "AGREGAR". Y luego, el valor recibido se lo asigno a la variable mostrarFormulario
    this.subscription = this.servInterfaz.alternarFormHabDura().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
  }

  //Booleano para verificar que estoy logueado
  isLogged = false;

  ngOnInit(): void {
    
    //Para traer, desde el inicio, la lista con las habilidades duras en la DB
    this.cargarHabDura();

    //Condicion para verificar si estoy o no logueado
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged=false;
    }

  }

  //Metodo para desplegar el formulario de agregar nueva hab dura
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarHabDura();
  }

  //Metodo para traer la lista de hab duras cargadas en la DB a traves del servicio hab dura
  cargarHabDura():void{
    this.servHabDura.lista().subscribe(data=>{
    this.habDuras = data;
    })
  }

   //Metodo para agregar una nueva hab dura a la DB a traves del servicio hab dura
   agregarUnaHabDura(habDuraAAgregar: HabDura){
    this.servHabDura.save(habDuraAAgregar).subscribe(
      data=>{
        alert("Habilidad dura creada");
        window.location.reload();
      }, err=> {
        alert("Hubo un fallo");
      }
    )
  }

  //Metodo para eliminar un habilidad dura de la DB
  delete(id?: number){
    if(id != undefined){
      this.servHabDura.delete(id).subscribe(
        data=>{
          this.cargarHabDura();
        }, err=>{
          alert("No se pudo borrar la Habilidad dura");
        }
      )
    }
  }

 

}
