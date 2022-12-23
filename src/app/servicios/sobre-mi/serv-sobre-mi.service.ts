import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SobreMi } from 'src/app/model/sobre-mi/sobre-mi';

@Injectable({
  providedIn: 'root'
})
export class ServSobreMiService {

  expURL = 'http://localhost:8080/sobremi/'

  constructor(private http:HttpClient) { }

  //Todos los metodos a continuacion llaman a los metodos creados en el backend
  
  //Me devuelve la lista de datos que se encuentran en la DB
  public lista(): Observable<SobreMi[]>{
    return this.http.get<SobreMi[]>(this.expURL + 'lista');
  }

  //Me devuelve el dato que se corresponde con el id en la DB
  public detail(id: number): Observable<SobreMi> {
    return this.http.get<SobreMi>(this.expURL + `detail/${id}`);
  }

  //Para guardar datos en la DB
  public save(sobreMi: SobreMi): Observable<any> {
    return this.http.post<any>(this.expURL + 'create', sobreMi);
  }

  //Para actualizar datos en la DB
  public update(id: number, sobreMi: SobreMi): Observable<any> {
    return this.http.put<any>(this.expURL + `update/${id}`, sobreMi);
  }

  //Para borrar datos en la DB
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`);
  }


}
