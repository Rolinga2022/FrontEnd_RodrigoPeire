import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario/login-usuario';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-a-login',
  templateUrl: './a-login.component.html',
  styleUrls: ['./a-login.component.css']
})
export class ALoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string [] = [];
  errMsj!: string; 



  constructor(private router:Router, private tokenService: TokenService, private authService:AuthService) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

  }

  onLogin(): void{

    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password); 
    this.authService.login(this.loginUsuario).subscribe(datos=>{
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(datos.token);
        this.tokenService.setUserName(datos.nombreUsuario);
        this.tokenService.setAuthorities(datos.authorities);
        this.roles = datos.authorities;
        this.router.navigate(['portfolio']);
      }, err=>{
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      })

  }

  iniciarSesion() {
    this.router.navigate(['/portfolio']) 
  }

}
