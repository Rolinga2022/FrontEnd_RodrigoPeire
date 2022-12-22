import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ALoginComponent } from './componentes/a-login/a-login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { PortfoliorpComponent } from './componentes/portfoliorp/portfoliorp.component';
import { ModifexperienciaComponent } from './componentes/e-experiencia/modifexperiencia/modifexperiencia.component';
import { ModifacademicaComponent } from './componentes/f-academica/modifacademica/modifacademica.component';
import { ModifhabblandaComponent } from './componentes/g-hab-blandas/modifhabblanda/modifhabblanda.component';
import { ModifhabduraComponent } from './componentes/h-hab-duras/modifhabdura/modifhabdura.component';
import { ModifcursosComponent } from './componentes/i-cursosycap/modifcursos/modifcursos.component';
import { ModifdescripcionComponent } from './componentes/c-encabezado/modifdescripcion/modifdescripcion.component';

const routes: Routes = [

  {path:'', component:BienvenidaComponent},
  {path:'login', component:ALoginComponent},
  {path:'portfolio', component:PortfoliorpComponent},
  {path:'modificarexp/:id', component:ModifexperienciaComponent},
  {path:'modificarformacad/:id', component:ModifacademicaComponent},
  {path:'modificarhabblanda/:id', component:ModifhabblandaComponent},
  {path:'modificarhabdura/:id', component:ModifhabduraComponent},
  {path:'modificarcursos/:id', component:ModifcursosComponent},
  {path:'modificardescrip/:id', component:ModifdescripcionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
