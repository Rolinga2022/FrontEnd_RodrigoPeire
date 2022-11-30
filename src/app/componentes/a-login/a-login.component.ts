import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-login',
  templateUrl: './a-login.component.html',
  styleUrls: ['./a-login.component.css']
})
export class ALoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(formulario:NgForm) {

    const email = formulario.value.email;
    const password = formulario.value.password;

  }

  iniciarSesion() {
    this.router.navigate(['/portfolio']) 
  }

}
