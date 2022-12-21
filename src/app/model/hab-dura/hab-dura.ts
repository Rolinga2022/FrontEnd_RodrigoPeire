export class HabDura {
    id? : number;
    nombreHabDura : string;
    porcentaje : number;
    

    constructor(nombreHabDura: string, porcentaje: number){
        this.nombreHabDura = nombreHabDura;
        this.porcentaje = porcentaje;
    }
}