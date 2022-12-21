import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosYCap } from 'src/app/model/cursosycap/cursosycap';
import { ServCursosycapService } from 'src/app/servicios/cursosycap/serv-cursosycap.service';


@Component({
  selector: 'app-modifcursos',
  templateUrl: './modifcursos.component.html',
  styleUrls: ['./modifcursos.component.css']
})
export class ModifcursosComponent implements OnInit {

  //Defino la variable cursoYCap del tipo CursosYCap q, en un principio, va a ser nula
  cursoYCap: CursosYCap = null;

  constructor(private router: Router, private servCursos: ServCursosycapService, private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activateRouter.snapshot.params['id'];//Capturo el id del curso
    this.servCursos.detail(id).subscribe(
      data=>{
        this.cursoYCap = data;
      }, err=>{
        alert("Error al modificar")
        this.router.navigate(['portfolio']);
      }//llamo al metodo detail
    )

  }

  //Metodo para modificar el curso
  clickEnModificar(): void {
    const id = this.activateRouter.snapshot.params['id'];//Capturo el id del curso
    this.servCursos.update(id, this.cursoYCap).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err=>{
        alert("Error al modificar el curso/capacitacón");
        this.router.navigate(['portfolio']);
      }//llamo al metodo update que esta en el servicioCurso... para agregar los datos ingresados en el formulario
      )
    }

 

}
