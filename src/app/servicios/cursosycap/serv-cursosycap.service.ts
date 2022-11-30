import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Curso } from 'src/app/componentes/i-cursosycap/curso';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type' : 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServCursosycapService {

  private apiUrl = 'http://localhost:5000/cursos';

  private idCurso:number = 0;

  constructor(private http:HttpClient) { }


  obtCursos():Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);/*Con esto retorno, mediante una peticion get, el contenido
    de la base de datos simulaada*/
  }

  deleteCurso(curso:Curso):Observable<Curso> {
    const url = `${this.apiUrl}/${curso.id}`; 
    return this.http.delete<Curso>(url);
  }

  addCurso(curso:Curso):Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  //LOS DOS METODOS A CONTINUACION TRABAJAN EN CONJUNTO PARA MODIFICAR
  idCursoEleg(id:any) {
    this.idCurso = id;
    return this.idCurso; 
  }
  editarCurso(cursoAModificar:Curso):Observable<Curso> {
    const url = `${this.apiUrl}/${this.idCurso}`; //creo que logro esto: http://localhost:5000/hab-Dura/idHabDura
    return this.http.put<Curso>(url, cursoAModificar);
  }

}
