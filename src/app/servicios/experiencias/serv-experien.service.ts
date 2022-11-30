import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experiencia } from 'src/app/componentes/e-experiencia/experiencia';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type' : 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServExperienService {

  private apiUrl = 'http://localhost:5000/experiencias';

  private idExp:number = 0;


  constructor(private http:HttpClient) { }

  obtExperiencias():Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl);/*Con esto retorno, mediante una peticion get, el contenido
    de la base de datos simulaada*/
  }

  deleteExperiencia(experiencia:Experiencia):Observable<Experiencia> {
    const url = `${this.apiUrl}/${experiencia.id}`; 
    return this.http.delete<Experiencia>(url);
  }

  addExperiencia(experiencia:Experiencia):Observable<Experiencia> {
    return this.http.post<Experiencia>(this.apiUrl, experiencia);
  }

  //LOS DOS METODOS A CONTINUACION TRABAJAN EN CONJUNTO PARA MODIFICAR
  idExperiencia(id:any) {
    this.idExp = id;
    return this.idExp; 
  }
  editarExperiencia(experienciaAModificar:Experiencia):Observable<Experiencia> {
    const url = `${this.apiUrl}/${this.idExp}`; //creo que logro esto: http://localhost:5000/experiencias/idExp
    return this.http.put<Experiencia>(url, experienciaAModificar);
  }



}
