import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HabDura } from 'src/app/componentes/h-hab-duras/habdura';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type' : 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServHabDuraService {

  private apiUrl = 'http://localhost:5000/hab-dura';

  private idHabDura:number = 0;

  constructor(private http:HttpClient) { }

  obtHabDuras():Observable<HabDura[]> {
    return this.http.get<HabDura[]>(this.apiUrl);/*Con esto retorno, mediante una peticion get, el contenido
    de la base de datos simulaada*/
  }

  deleteHAbDura(habDura:HabDura):Observable<HabDura> {
    const url = `${this.apiUrl}/${habDura.id}`; 
    return this.http.delete<HabDura>(url);
  }

  addHAbDura(habDura:HabDura):Observable<HabDura> {
    return this.http.post<HabDura>(this.apiUrl, habDura);
  }

  //LOS DOS METODOS A CONTINUACION TRABAJAN EN CONJUNTO PARA MODIFICAR
  idHAbDura(id:any) {
    this.idHabDura = id;
    return this.idHabDura; 
  }
  editarHAbDura(habDuraAModificar:HabDura):Observable<HabDura> {
    const url = `${this.apiUrl}/${this.idHabDura}`; //creo que logro esto: http://localhost:5000/hab-Dura/idHabDura
    return this.http.put<HabDura>(url, habDuraAModificar);
  }


}
