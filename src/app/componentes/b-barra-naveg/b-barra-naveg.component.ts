import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-b-barra-naveg',
  templateUrl: './b-barra-naveg.component.html',
  styleUrls: ['./b-barra-naveg.component.css']
})
export class BBarraNavegComponent implements OnInit {

  //Variable para verificar si estoy logueado
  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    //Condicional para verificar que estoy logueado
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut():void {
    this.tokenService.logOut();
    
    
  }

  login() {
    this.router.navigate(['/login'])
  }

}
