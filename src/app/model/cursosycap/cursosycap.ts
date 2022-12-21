export class CursosYCap {
    id? : number;
    nombreCurso : string;
    institucion : string;
    tipo : string;
    year : string;

    constructor(nombreCurso: string, institucion: string, tipo: string, year : string){
        this.nombreCurso = nombreCurso;
        this.institucion = institucion;
        this.tipo = tipo;
        this.year = year;
    }
}