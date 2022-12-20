import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Academica } from 'src/app/model/academica/academica';


@Injectable({
  providedIn: 'root'
})

export class ServFormacionService {

  expURL = 'http://localhost:8080/academico/'

  constructor(private http:HttpClient) { }

  //Todos los metodos a continuacion llaman a los metodos creados en el backend
  
  //Me devuelve la lista de formaciones academicas que se encuentran en la DB
  public lista(): Observable<Academica[]>{
    return this.http.get<Academica[]>(this.expURL + 'lista');
  }

  //Me devuelve la formacion academica que se corresponde con el id en la DB
  public detail(id: number): Observable<Academica> {
    return this.http.get<Academica>(this.expURL + `detail/${id}`);
  }

  //Para guardar datos en la DB
  public save(academica: Academica): Observable<any> {
    return this.http.post<any>(this.expURL + 'create', academica);
  }

  //Para actualizar datos en la DB
  public update(id: number, academica: Academica): Observable<any> {
    return this.http.put<any>(this.expURL + `update/${id}`, academica);
  }

  //Para borrar datos en la DB
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`);
  }



}
