import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Formacion } from 'src/app/componentes/f-academica/formacion';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type' : 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServFormacionService {

  private apiUrl = 'http://localhost:5000/formacion';

  private idFormacion:number = 0;



  constructor(private http:HttpClient) { }


  obtFormaciones():Observable<Formacion[]> {
    return this.http.get<Formacion[]>(this.apiUrl);/*Con esto retorno, mediante una peticion get, el contenido
    de la base de datos simulaada*/
  }

  deleteFormacion(formacion:Formacion):Observable<Formacion> {
    const url = `${this.apiUrl}/${formacion.id}`; 
    return this.http.delete<Formacion>(url);
  }

  addFormacion(formacion:Formacion):Observable<Formacion> {
    return this.http.post<Formacion>(this.apiUrl, formacion);
  }

  //LOS DOS METODOS A CONTINUACION TRABAJAN EN CONJUNTO PARA MODIFICAR
  idAcademico(id:any) {
    this.idFormacion = id;
    return this.idFormacion; 
  }
  editarFormacion(formacionAModificar:Formacion):Observable<Formacion> {
    const url = `${this.apiUrl}/${this.idFormacion}`; //creo que logro esto: http://localhost:5000/formacion/idFormacion
    return this.http.put<Formacion>(url, formacionAModificar);
  }


}
