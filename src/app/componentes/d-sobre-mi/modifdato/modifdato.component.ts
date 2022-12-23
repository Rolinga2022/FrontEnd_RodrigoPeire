import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SobreMi } from 'src/app/model/sobre-mi/sobre-mi';
import { ServSobreMiService } from 'src/app/servicios/sobre-mi/serv-sobre-mi.service';

@Component({
  selector: 'app-modifdato',
  templateUrl: './modifdato.component.html',
  styleUrls: ['./modifdato.component.css']
})
export class ModifdatoComponent implements OnInit {

  //Defino la variable dato del tipo SobreMi q, en un principio, va a ser nula
  dato: SobreMi = null;

  constructor(private router: Router, private servSobreMi: ServSobreMiService, private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activateRouter.snapshot.params['id'];//Capturo el id del dato
    this.servSobreMi.detail(id).subscribe(
      data=>{
        this.dato = data;
      }, err=>{
        alert("Error al modificar")
        this.router.navigate(['portfolio']);
      }//llamo al metodo detail
    )

  }

  //Metodo para modificar el dato
  clickEnModificar(): void {
    const id = this.activateRouter.snapshot.params['id'];//Capturo el id del dato
    this.servSobreMi.update(id, this.dato).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err=>{
        alert("Error al modificar el dato");
        this.router.navigate(['portfolio']);
      }//llamo al metodo update que esta en el serviciosobremi para agregar los datos ingresados en el formulario
    )
  }

}
