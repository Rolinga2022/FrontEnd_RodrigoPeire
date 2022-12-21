import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HabBlanda } from 'src/app/model/hab-blanda/hab-blanda';
import { ServHabBlandaService } from 'src/app/servicios/hab-blandas/serv-hab-blanda.service';


@Component({
  selector: 'app-modifhabblanda',
  templateUrl: './modifhabblanda.component.html',
  styleUrls: ['./modifhabblanda.component.css']
})
export class ModifhabblandaComponent implements OnInit {

  //Defino la variable formAcad del tipo Academica q, en un principio, va a ser nula
  habBlanda: HabBlanda = null;


  constructor(private router: Router, 
              private servHabBlanda: ServHabBlandaService, 
              private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activateRouter.snapshot.params['id'];//Capturo el id de la habblanda
    this.servHabBlanda.detail(id).subscribe(
      data=>{
        this.habBlanda = data;
      }, err=>{
        alert("Error al modificar")
        this.router.navigate(['portfolio']);
      }//llamo al metodo detail
    )

  }

  //Metodo para modificar la habilidad blanda
  clickEnModificar(): void {
    const id = this.activateRouter.snapshot.params['id'];//Capturo el id de la hab blanda
    this.servHabBlanda.update(id, this.habBlanda).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err=>{
        alert("Error al modificar habilidad blanda");
        this.router.navigate(['portfolio']);
      }//llamo al metodo update que esta en el servicioHabBlanda para agregar los datos ingresados en el formulario
      )
    }



}
