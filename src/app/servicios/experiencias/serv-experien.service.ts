import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia/experiencia';


@Injectable({
  providedIn: 'root'
})

export class ServExperienService {

  expURL = 'http://localhost:8080/explab/'
  

  constructor(private http:HttpClient) {}

  //Todos los metodos a continuacion llaman a los metodos creados en el backend
  
  //Me devuelve la lista de experiencias que se encuentran en la DB
  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.expURL + 'lista');
  }

  //Me devuelve la experiencia que se corresponde con el id en la DB
  public detail(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  //Para guardar datos en la DB
  public save(experiencia: Experiencia): Observable<any> {
    return this.http.post<any>(this.expURL + 'create', experiencia);
  }

  //Para actualizar datos en la DB
  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  //Para borrar datos en la DB
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`);
  }

}
