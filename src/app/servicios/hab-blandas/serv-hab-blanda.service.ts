import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HabBlanda } from 'src/app/model/hab-blanda/hab-blanda';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ServHabBlandaService {

  expURL = 'http://localhost:8080/habblanda/'

  constructor(private http:HttpClient) { }

   //Todos los metodos a continuacion llaman a los metodos creados en el backend
  
  //Me devuelve la lista de habilidades blandas academicas que se encuentran en la DB
  public lista(): Observable<HabBlanda[]>{
    return this.http.get<HabBlanda[]>(this.expURL + 'lista');
  }

  //Me devuelve la hab blanda que se corresponde con el id en la DB
  public detail(id: number): Observable<HabBlanda> {
    return this.http.get<HabBlanda>(this.expURL + `detail/${id}`);
  }

  //Para guardar datos en la DB
  public save(habBlanda: HabBlanda): Observable<any> {
    return this.http.post<any>(this.expURL + 'create', habBlanda);
  }

  //Para actualizar datos en la DB
  public update(id: number, habBlanda: HabBlanda): Observable<any> {
    return this.http.put<any>(this.expURL + `update/${id}`, habBlanda);
  }

  //Para borrar datos en la DB
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`);
  }


}
