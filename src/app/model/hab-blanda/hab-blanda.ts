export class HabBlanda {
    id? : number;
    nombreHabBlanda : string;
    porcentaje : number;
    

    constructor(nombreHabBlanda: string, porcentaje: number){
        this.nombreHabBlanda = nombreHabBlanda;
        this.porcentaje = porcentaje;
    }
}