import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ALoginComponent } from './componentes/a-login/a-login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { PortfoliorpComponent } from './componentes/portfoliorp/portfoliorp.component';
import { ModifexperienciaComponent } from './componentes/e-experiencia/modifexperiencia/modifexperiencia.component';

const routes: Routes = [

  {path:'', component:BienvenidaComponent},
  {path:'login', component:ALoginComponent},
  {path:'portfolio', component:PortfoliorpComponent},
  {path:'modificarexp/:id', component:ModifexperienciaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
