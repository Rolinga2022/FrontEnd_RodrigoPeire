import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HabBlanda } from 'src/app/componentes/g-hab-blandas/habblanda';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type' : 'aplication/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ServHabBlandaService {

  private apiUrl = 'http://localhost:5000/hab-blanda';

  private idHabBlanda:number = 0;

  constructor(private http:HttpClient) { }


  obtHabBlandas():Observable<HabBlanda[]> {
    return this.http.get<HabBlanda[]>(this.apiUrl);/*Con esto retorno, mediante una peticion get, el contenido
    de la base de datos simulaada*/
  }

  deleteHAbBlanda(habBlanda:HabBlanda):Observable<HabBlanda> {
    const url = `${this.apiUrl}/${habBlanda.id}`; 
    return this.http.delete<HabBlanda>(url);
  }

  addHAbBlanda(habBlanda:HabBlanda):Observable<HabBlanda> {
    return this.http.post<HabBlanda>(this.apiUrl, habBlanda);
  }

  //LOS DOS METODOS A CONTINUACION TRABAJAN EN CONJUNTO PARA MODIFICAR
  idHAbBlanda(id:any) {
    this.idHabBlanda = id;
    return this.idHabBlanda; 
  }
  editarHAbBlanda(habBlandaAModificar:HabBlanda):Observable<HabBlanda> {
    const url = `${this.apiUrl}/${this.idHabBlanda}`; //creo que logro esto: http://localhost:5000/hab-blanda/idHabBlanda
    return this.http.put<HabBlanda>(url, habBlandaAModificar);
  }


}
