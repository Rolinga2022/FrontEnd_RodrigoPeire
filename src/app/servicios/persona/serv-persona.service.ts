import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/model/persona/persona.model';


@Injectable({
  providedIn: 'root'
})
export class ServPersonaService {

  Url = 'https://backendrodrigopeire-production.up.railway.app/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.Url + 'perfil');
  }


}
