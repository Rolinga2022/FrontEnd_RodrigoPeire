export class Academica {
    id? : number;
    nombreInstituto : string;
    titulo : string;
    duracion : string;

    constructor(nombreInstituto: string, titulo: string, duracion: string){
        this.nombreInstituto = nombreInstituto;
        this.titulo = titulo;
        this.duracion = duracion;
    }
}