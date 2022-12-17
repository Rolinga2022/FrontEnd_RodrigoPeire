export class Experiencia {
    id? : number;
    nombreE : string;
    empresa : string;
    tarea : string;
    formato : string;

    constructor(nombreE: string, empresa: string, tarea: string, formato: string){
        this.nombreE = nombreE;
        this.empresa = empresa;
        this.tarea = tarea;
        this.formato = formato;
    }
}