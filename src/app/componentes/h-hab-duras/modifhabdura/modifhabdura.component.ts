import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabDura } from 'src/app/model/hab-dura/hab-dura';
import { ServHabDuraService } from 'src/app/servicios/hab-duras/serv-hab-dura.service';


@Component({
  selector: 'app-modifhabdura',
  templateUrl: './modifhabdura.component.html',
  styleUrls: ['./modifhabdura.component.css']
})
export class ModifhabduraComponent implements OnInit {

  //Defino la variable habdura del tipo HabDura q, en un principio, va a ser nula
  habDura: HabDura = null;

  constructor(private router: Router, 
              private servHabDura: ServHabDuraService, 
              private activateRouter:ActivatedRoute) { }


  ngOnInit(): void {

    const id = this.activateRouter.snapshot.params['id'];//Capturo el id de la habdura
    this.servHabDura.detail(id).subscribe(
      data=>{
        this.habDura = data;
      }, err=>{
        alert("Error al modificar")
        this.router.navigate(['portfolio']);
      }//llamo al metodo detail
    )

  }

  //Metodo para modificar la habilidad dura
  clickEnModificar(): void {
    const id = this.activateRouter.snapshot.params['id'];//Capturo el id de la hab dura
    this.servHabDura.update(id, this.habDura).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err=>{
        alert("Error al modificar habilidad blanda");
        this.router.navigate(['portfolio']);
      }//llamo al metodo update que esta en el servicioHabDura para agregar los datos ingresados en el formulario
      )
    }



}
