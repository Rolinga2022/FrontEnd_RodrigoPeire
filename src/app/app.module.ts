import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//routung
import { AppRoutingModule } from './app-routing.module';

//Formulario
import { FormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { ALoginComponent } from './componentes/a-login/a-login.component';
import { BBarraNavegComponent } from './componentes/b-barra-naveg/b-barra-naveg.component';
import { CEncabezadoComponent } from './componentes/c-encabezado/c-encabezado.component';
import { DSobreMiComponent } from './componentes/d-sobre-mi/d-sobre-mi.component';

  //Componente Experiencia
  import { EExperienciaComponent } from './componentes/e-experiencia/e-experiencia.component';
    import { MasexperienciasComponent } from './componentes/e-experiencia/masexperiencias/masexperiencias.component';
    import { BtnagregarComponent } from './componentes/e-experiencia/btnagregar/btnagregar.component';
    //import { ItemexperienciaComponent } from './componentes/e-experiencia/itemexperiencia/itemexperiencia.component';
    import { ModifexperienciaComponent } from './componentes/e-experiencia/modifexperiencia/modifexperiencia.component';

  //Componente formacion academica
  import { FAcademicaComponent } from './componentes/f-academica/f-academica.component';
    import { MasacademicaComponent } from './componentes/f-academica/masacademica/masacademica.component';
    import { ModifacademicaComponent } from './componentes/f-academica/modifacademica/modifacademica.component';
    import { BtnagregaracadComponent } from './componentes/f-academica/btnagregaracad/btnagregaracad.component';

  //Componente habilidades blandas
  import { GHabBlandasComponent } from './componentes/g-hab-blandas/g-hab-blandas.component';
    import { BtnaddblandaComponent } from './componentes/g-hab-blandas/btnaddblanda/btnaddblanda.component';
    import { ItemhabblandaComponent } from './componentes/g-hab-blandas/itemhabblanda/itemhabblanda.component';
    import { MashabblandaComponent } from './componentes/g-hab-blandas/mashabblanda/mashabblanda.component';
    import { ModifhabblandaComponent } from './componentes/g-hab-blandas/modifhabblanda/modifhabblanda.component';

  //Componente habilidades duras
  import { HHabDurasComponent } from './componentes/h-hab-duras/h-hab-duras.component';
    import { BtnaddduraComponent } from './componentes/h-hab-duras/btnadddura/btnadddura.component';
    import { ItemhabduraComponent } from './componentes/h-hab-duras/itemhabdura/itemhabdura.component';
    import { MashabduraComponent } from './componentes/h-hab-duras/mashabdura/mashabdura.component';
    import { ModifhabduraComponent } from './componentes/h-hab-duras/modifhabdura/modifhabdura.component';

  //Componente cursos y capacitaciones
  import { ICursosycapComponent } from './componentes/i-cursosycap/i-cursosycap.component';
    import { BtnaddcursosComponent } from './componentes/i-cursosycap/btnaddcursos/btnaddcursos.component';
    import { ItemcursosComponent } from './componentes/i-cursosycap/itemcursos/itemcursos.component';
    import { MascursosComponent } from './componentes/i-cursosycap/mascursos/mascursos.component';
    import { ModifcursosComponent } from './componentes/i-cursosycap/modifcursos/modifcursos.component';
  //Componente Portfolio
  import { JPortfolioComponent } from './componentes/j-portfolio/j-portfolio.component';
  import { KClientesComponent } from './componentes/k-clientes/k-clientes.component';
  import { LContactoComponent } from './componentes/l-contacto/l-contacto.component';
  import { MFooterComponent } from './componentes/m-footer/m-footer.component';
  //Componente que contiene al portfolio entero
  import { PortfoliorpComponent } from './componentes/portfoliorp/portfoliorp.component';
  //Componente de bienvenida
  import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';

//Edicion de iconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//servicios
import { ServExperienService } from './servicios/experiencias/serv-experien.service'; 
import {HttpClientModule} from '@angular/common/http';
import { ServInterfazService } from './servicios/interfaz/serv-interfaz.service';
import { ServFormacionService } from './servicios/formaciones/serv-formacion.service';
import { ServHabBlandaService } from './servicios/hab-blandas/serv-hab-blanda.service';
import { ServHabDuraService } from './servicios/hab-duras/serv-hab-dura.service';
import { ServCursosycapService } from './servicios/cursosycap/serv-cursosycap.service';
import { ServPersonaService } from './servicios/persona/serv-persona.service';



@NgModule({
  declarations: [
    AppComponent,
    ALoginComponent,
    BBarraNavegComponent,
    CEncabezadoComponent,
    DSobreMiComponent,
    EExperienciaComponent,
    FAcademicaComponent,
    GHabBlandasComponent,
    HHabDurasComponent,
    ICursosycapComponent,
    JPortfolioComponent,
    KClientesComponent,
    LContactoComponent,
    MFooterComponent,
    MasexperienciasComponent,
    BtnagregarComponent,
    //ItemexperienciaComponent,
    ModifexperienciaComponent,
    //ItemacademicoComponent,
    MasacademicaComponent,
    ModifacademicaComponent,
    BtnagregaracadComponent,
    BtnaddblandaComponent,
    ItemhabblandaComponent,
    MashabblandaComponent,
    ModifhabblandaComponent,
    BtnaddduraComponent,
    ItemhabduraComponent,
    MashabduraComponent,
    ModifhabduraComponent,
    BtnaddcursosComponent,
    ItemcursosComponent,
    MascursosComponent,
    ModifcursosComponent,
    PortfoliorpComponent,
    BienvenidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    ServExperienService,
    ServInterfazService, 
    ServFormacionService,
    ServHabBlandaService,
    ServHabDuraService,
    ServCursosycapService,
    ServPersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
