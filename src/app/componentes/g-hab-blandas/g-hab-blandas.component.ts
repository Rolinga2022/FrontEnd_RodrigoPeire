import { Component, OnInit } from '@angular/core';
import { ServHabBlandaService } from 'src/app/servicios/hab-blandas/serv-hab-blanda.service';
import { ServInterfazService } from 'src/app/servicios/interfaz/serv-interfaz.service';
import { Subscription } from 'rxjs';
import { HabBlanda } from 'src/app/model/hab-blanda/hab-blanda';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-g-hab-blandas',
  templateUrl: './g-hab-blandas.component.html',
  styleUrls: ['./g-hab-blandas.component.css']
})
export class GHabBlandasComponent implements OnInit {

  //titulo
  titulocomponente: string = "Habilidades Blandas";

  //Para mostrar formulario de AGREGAR
  mostrarFormulario:boolean = false;
  subscription?: Subscription;

  //inicializo la lista de hab blandas.
  habBlandas: HabBlanda[] = [];



  constructor(private servHabBlanda:ServHabBlandaService, 
              private servInterfaz:ServInterfazService,
              private tokenService:TokenService
              ) { 
    //Para ejecutar el servicio de alternar el formulario "AGREGAR". Y luego, el valor recibido se lo asigno a la variable mostrarFormulario
    this.subscription = this.servInterfaz.alternarFormHabBlanda().subscribe(valorRecibido=> this.mostrarFormulario = valorRecibido);
  }

  //Booleano para verificar que estoy logueado
  isLogged = false;

  ngOnInit(): void {

    //Para traer, desde el inicio, la lista con las habilidades blandas en la DB
    this.cargarHabBlanda();

    //Condicion para verificar si estoy o no logueado
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged=false;
    }
   
  }

  //Metodo para desplegar el formulario de agregar nueva hab blanda
  alternarAgregar() {
    this.servInterfaz.mostrarAgregarHabBlanda();
  }

  //Metodo para traer la lista de hab blandas cargadas en la DB a traves del servicio hab blanda
  cargarHabBlanda():void{
    this.servHabBlanda.lista().subscribe(data=>{
    this.habBlandas = data;
    })
  }

  //Metodo para agregar una nueva hab blanda a la DB a traves del servicio hab blanda
  agregarUnaHabBlanda(habBlandaAAgregar: HabBlanda){
    this.servHabBlanda.save(habBlandaAAgregar).subscribe(
      data=>{
        alert("Habilidad blanda creada");
        window.location.reload();
      }, err=> {
        alert("Hubo un fallo");
      }
    )
  }

  //Metodo para eliminar un habilidad de la DB
  delete(id?: number){
    if(id != undefined){
      this.servHabBlanda.delete(id).subscribe(
        data=>{
          this.cargarHabBlanda();
        }, err=>{
          alert("No se pudo borrar la Habilidad blanda");
        }
      )
    }
  }

 


}
