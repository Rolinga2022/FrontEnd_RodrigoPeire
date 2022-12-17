import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia/experiencia';
import { ServExperienService } from 'src/app/servicios/experiencias/serv-experien.service';


@Component({
  selector: 'app-modifexperiencia',
  templateUrl: './modifexperiencia.component.html',
  styleUrls: ['./modifexperiencia.component.css']
})
export class ModifexperienciaComponent implements OnInit {

  //Defino la variable expLab del tipo Experiencia q, en un principio, va a ser nula
  expLab: Experiencia = null;

  constructor(private router: Router, private servExperiencia: ServExperienService, private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];//Capturo el id de la experiencia
    this.servExperiencia.detail(id).subscribe(
      data=>{
        this.expLab = data;
      }, err=>{
        alert("Error al modificar")
        this.router.navigate(['portfolio']);
      }//llamo al metodo detail
    )
  }

  //Metodo para modificar la experiencia
  clickEnModificar(): void {
    const id = this.activateRouter.snapshot.params['id'];//Capturo el id de la experiencia
    this.servExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err=>{
        alert("Error al modificar experiencia");
        this.router.navigate(['portfolio']);
      }//llamo al metodo update que esta en el servicioExper para agregar los datos ingresados en el formulario
    )
  }

}

