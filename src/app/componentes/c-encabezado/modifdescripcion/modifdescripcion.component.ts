import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Descripcion } from 'src/app/model/descripcion-pers/descripcion-pers';
import { ServDescripcionService } from 'src/app/servicios/descripcion-pers/serv-descripcion.service';

@Component({
  selector: 'app-modifdescripcion',
  templateUrl: './modifdescripcion.component.html',
  styleUrls: ['./modifdescripcion.component.css']
})
export class ModifdescripcionComponent implements OnInit {

  //Defino la variable descrip del tipo Descripcion q, en un principio, va a ser nula
  descrip: Descripcion = null;

  constructor(private router: Router, private servDescripcion: ServDescripcionService, private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activateRouter.snapshot.params['id'];//Capturo el id de la descr
    this.servDescripcion.detail(id).subscribe(
      data=>{
        this.descrip = data;
      }, err=>{
        alert("Error al modificar")
        this.router.navigate(['portfolio']);
      }//llamo al metodo detail
    )

  }

  //Metodo para modificar la descripcion
  clickEnModificar(): void {
    const id = this.activateRouter.snapshot.params['id'];//Capturo el id de la descrip
    this.servDescripcion.update(id, this.descrip).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err=>{
        alert("Error al modificar descripcion");
        this.router.navigate(['portfolio']);
      }//llamo al metodo update que esta en el servicioDescr para agregar los datos ingresados en el formulario
    )
  }

}
