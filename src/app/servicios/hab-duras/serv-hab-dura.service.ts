import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HabDura } from 'src/app/model/hab-dura/hab-dura';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ServHabDuraService {

  expURL = 'http://localhost:8080/habdura/'

  constructor(private http:HttpClient) { }

  //Todos los metodos a continuacion llaman a los metodos creados en el backend
  
  //Me devuelve la lista de habilidades duras que se encuentran en la DB
  public lista(): Observable<HabDura[]>{
    return this.http.get<HabDura[]>(this.expURL + 'lista');
  }

  //Me devuelve la hab dura que se corresponde con el id en la DB
  public detail(id: number): Observable<HabDura> {
    return this.http.get<HabDura>(this.expURL + `detail/${id}`);
  }

  //Para guardar datos en la DB
  public save(habDura: HabDura): Observable<any> {
    return this.http.post<any>(this.expURL + 'create', habDura);
  }

  //Para actualizar datos en la DB
  public update(id: number, habDura: HabDura): Observable<any> {
    return this.http.put<any>(this.expURL + `update/${id}`, habDura);
  }

  //Para borrar datos en la DB
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`);
  }

 


}
