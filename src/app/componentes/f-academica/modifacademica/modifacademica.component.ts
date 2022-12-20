import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Academica } from 'src/app/model/academica/academica';
import { ServFormacionService } from 'src/app/servicios/formaciones/serv-formacion.service';


@Component({
  selector: 'app-modifacademica',
  templateUrl: './modifacademica.component.html',
  styleUrls: ['./modifacademica.component.css']
})
export class ModifacademicaComponent implements OnInit {

  //Defino la variable formAcad del tipo Academica q, en un principio, va a ser nula
  formAcad: Academica = null;

  constructor(private router: Router, private servAcademico: ServFormacionService, private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activateRouter.snapshot.params['id'];//Capturo el id de la formacion
    this.servAcademico.detail(id).subscribe(
      data=>{
        this.formAcad = data;
      }, err=>{
        alert("Error al modificar")
        this.router.navigate(['portfolio']);
      }//llamo al metodo detail
    )

  }

  //Metodo para modificar la formacion academica
  clickEnModificar(): void {
    const id = this.activateRouter.snapshot.params['id'];//Capturo el id de la formacion
    this.servAcademico.update(id, this.formAcad).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err=>{
        alert("Error al modificar formacion academica");
        this.router.navigate(['portfolio']);
      }//llamo al metodo update que esta en el servicioAcademico para agregar los datos ingresados en el formulario
      )
    }

  

}
