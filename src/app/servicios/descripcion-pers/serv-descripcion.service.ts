import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Descripcion } from 'src/app/model/descripcion-pers/descripcion-pers';

@Injectable({
  providedIn: 'root'
})
export class ServDescripcionService {

  expURL = 'http://backendrodrigopeire-production.up.railway.app/descripcion/'

  constructor(private http:HttpClient) { }

  //Todos los metodos a continuacion llaman a los metodos creados en el backend
  
  //Me devuelve la lista de descripciones que se encuentran en la DB
  public lista(): Observable<Descripcion[]>{
    return this.http.get<Descripcion[]>(this.expURL + 'lista');
  }

  //Me devuelve la Descripcion que se corresponde con el id en la DB
  public detail(id: number): Observable<Descripcion> {
    return this.http.get<Descripcion>(this.expURL + `detail/${id}`);
  }

  //Para guardar datos en la DB
  public save(descripcion: Descripcion): Observable<any> {
    return this.http.post<any>(this.expURL + 'create', descripcion);
  }

  //Para actualizar datos en la DB
  public update(id: number, descripcion: Descripcion): Observable<any> {
    return this.http.put<any>(this.expURL + `update/${id}`, descripcion);
  }

  //Para borrar datos en la DB
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`);
  }



}
