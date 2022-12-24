import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursosYCap } from 'src/app/model/cursosycap/cursosycap';
import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class ServCursosycapService {

  expURL = 'https://backendrodrigopeire-production.up.railway.app/cursos/'

  constructor(private http:HttpClient) { }

  //Todos los metodos a continuacion llaman a los metodos creados en el backend
  
  //Me devuelve la lista de cursos que se encuentran en la DB
  public lista(): Observable<CursosYCap[]>{
    return this.http.get<CursosYCap[]>(this.expURL + 'lista');
  }

  //Me devuelve el curso que se corresponde con el id en la DB
  public detail(id: number): Observable<CursosYCap> {
    return this.http.get<CursosYCap>(this.expURL + `detail/${id}`);
  }

  //Para guardar datos en la DB
  public save(cursosYCap: CursosYCap): Observable<any> {
    return this.http.post<any>(this.expURL + 'create', cursosYCap);
  }

  //Para actualizar datos en la DB
  public update(id: number, cursosYCap: CursosYCap): Observable<any> {
    return this.http.put<any>(this.expURL + `update/${id}`, cursosYCap);
  }

  //Para borrar datos en la DB
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`);
  }
 

}
