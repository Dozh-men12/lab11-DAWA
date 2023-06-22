export class Pilotos {
    _id?: string;
    cod: string;
    nombre: string;
    horas_vuelo: string;

    constructor(cod: string, nombre: string, horas_vuelo: string){
        this.cod = cod;
        this.nombre = nombre;
        this.horas_vuelo = horas_vuelo;       
    }
}