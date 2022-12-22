import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServInterfazService {


  //EXPERIENCIA
  //Servicio para mostrar, o no, el formulario de AGREGAR experiencia.
  private mostrarFormAgregar:boolean = false;
  private subject = new Subject<any>(); // posibilita "escuchar elementos del template"
  //Servicio para mostrar, o no, el formulario de MODIFICAR experiencia.
  private mostrarFormModificar:boolean = false;
  private subject1 = new Subject<any>();
  //####################################################################


  //FORMACION ACADEMICA
  //Servicio para mostrar, o no, el formulario de AGREGAR FORMACION.
  private mostrarFormFormacion:boolean = false;
  private subjectFormacion = new Subject<any>(); // posibilita "escuchar elementos del template"
  //Servicio para mostrar, o no, el formulario de MODIFICAR FORMACION.
  private mostrarFormModificarFormacion:boolean = false;
  private subjectModifFormacion = new Subject<any>();
  //####################################################################


  //HABILIDADES BLANDAS
  //Servicio para mostrar, o no, el formulario de agregar habilidad blanda
  private mostrarFormHabBlanda:boolean = false;
  private subjectHabBlanda = new Subject<any>();// posibilita "escuchar" elementos del template"
  //Servicio para mostrar, o no, el formulario de MODIFICAR Habilidad blanda.
  private mostrarFormModificarHabBlanda:boolean = false;
  private subjectModifHabBlanda = new Subject<any>();
  //####################################################################

  //HABILIDADES DURAS
  //Servicio para mostrar, o no, el formulario de agregar habilidad dura
  private mostrarFormHabDura:boolean = false;
  private subjectHabDura = new Subject<any>();// posibilita "escuchar" elementos del template"
  //Servicio para mostrar, o no, el formulario de MODIFICAR Habilidad dura.
  private mostrarFormModificarHabDura:boolean = false;
  private subjectModifHabDura = new Subject<any>();
  //####################################################################

  //CURSOS Y CAPACITACION
  //Servicio para mostrar, o no, el formulario de agregar cursos
  private mostrarFormCursos:boolean = false;
  private subjectCursos = new Subject<any>();// posibilita "escuchar" elementos del template"
  //Servicio para mostrar, o no, el formulario de MODIFICAR cursos.
  private mostrarFormModificarCursos:boolean = false;
  private subjectModifCursos = new Subject<any>();
  //####################################################################

  //DESCRIPCION
  //Servicio para mostrar, o no, el formulario de AGREGAR descripcion.
  private mostrarFormDescrip:boolean = false;
  private subjectDescrip = new Subject<any>(); // posibilita "escuchar elementos del template"
  //Servicio para mostrar, o no, el formulario de MODIFICAR descripcion.
  private mostrarFormModificarDesc:boolean = false;
  private subjectDesc = new Subject<any>();
  //####################################################################


  constructor() { }

  //DESCRIPCION
  //metodo para alternar mostrar el formulario de AGREGAR descripcion
  mostrarAgregarDescripcion():void {
    this.mostrarFormDescrip = !this.mostrarFormDescrip;
    this.subjectDesc.next(this.mostrarFormDescrip);
  }
  alternarFormDescrip():Observable<any>{
    return this.subjectDesc.asObservable();
  }
  //####################################################################

  //EXPERIENCIA
  //metodo para alternar mostrar el formulario de AGREGAR experiencia
  mostrarAgregarExperiencia():void {
    this.mostrarFormAgregar = !this.mostrarFormAgregar;
    this.subject.next(this.mostrarFormAgregar);
  }
  alternarFormExp():Observable<any>{
    return this.subject.asObservable();
  }
  //metodo para alternar mostrar el formulario de MODIFICAR experiencia
  mostrarModificarExperiencia():void {
    this.mostrarFormModificar = !this.mostrarFormModificar;
    this.subject1.next(this.mostrarFormModificar);
  }
  alternarFormModif():Observable<any>{
    return this.subject1.asObservable();
  }
  //####################################################################


  //FORMACION
  //metodo para alternar mostrar el formulario de AGREGAR FORAMCION
  mostrarAgregarFormacion():void {
    this.mostrarFormFormacion = !this.mostrarFormFormacion;
    this.subjectFormacion.next(this.mostrarFormFormacion);
  }
  alternarFormFormacion():Observable<any>{
    return this.subjectFormacion.asObservable();
  }
  //metodo para alternar mostrar el formulario de MODIFICAR FORMACION
  mostrarModificarFormacion():void {
    this.mostrarFormModificarFormacion = !this.mostrarFormModificarFormacion;
    this.subjectModifFormacion.next(this.mostrarFormModificarFormacion);
  }
  alternarFormModifFormacion():Observable<any>{
    return this.subjectModifFormacion.asObservable();
  }
  //####################################################################


  //HABILIDADES BLANDAS
  //metodo para alternar mostrar el formulario de AGREGAR HABILIDADES BLANDAS
  mostrarAgregarHabBlanda():void {
    this.mostrarFormHabBlanda = !this.mostrarFormHabBlanda;
    this.subjectHabBlanda.next(this.mostrarFormHabBlanda);
  }
  alternarFormHabBlanda():Observable<any>{
    return this.subjectHabBlanda.asObservable();
  }
  //metodo para alternar mostrar el formulario de MODIFICAR HABILIDADES BLANDAS
  mostrarModificarHabBlanda():void {
    this.mostrarFormModificarHabBlanda = !this.mostrarFormModificarHabBlanda;
    this.subjectModifHabBlanda.next(this.mostrarFormModificarHabBlanda);
  }
  alternarFormModifHabBlanda():Observable<any>{
    return this.subjectModifHabBlanda.asObservable();
  }
  //####################################################################


  //HABILIDADES DURAS
  //metodo para alternar mostrar el formulario de AGREGAR HABILIDADES DURAS
  mostrarAgregarHabDura():void {
    this.mostrarFormHabDura = !this.mostrarFormHabDura;
    this.subjectHabDura.next(this.mostrarFormHabDura);
  }
  alternarFormHabDura():Observable<any>{
    return this.subjectHabDura.asObservable();
  }
  //metodo para alternar mostrar el formulario de MODIFICAR HABILIDADES DURAS
  mostrarModificarHabDura():void {
    this.mostrarFormModificarHabDura = !this.mostrarFormModificarHabDura;
    this.subjectModifHabDura.next(this.mostrarFormModificarHabDura);
  }
  alternarFormModifHabDura():Observable<any>{
    return this.subjectModifHabDura.asObservable();
  }
  //####################################################################


  //CURSOS Y CAPACITACION
  //metodo para alternar mostrar el formulario de AGREGAR HABILIDADES DURAS
  mostrarAgregarCursos():void {
    this.mostrarFormCursos = !this.mostrarFormCursos;
    this.subjectCursos.next(this.mostrarFormCursos);
  }
  alternarFormCursos():Observable<any>{
    return this.subjectCursos.asObservable();
  }
  //metodo para alternar mostrar el formulario de MODIFICAR HABILIDADES DURAS
  mostrarModificarCursos():void {
    this.mostrarFormModificarCursos = !this.mostrarFormModificarCursos;
    this.subjectModifCursos.next(this.mostrarFormModificarCursos);
  }
  alternarFormModifCursos():Observable<any>{
    return this.subjectModifCursos.asObservable();
  }

}

