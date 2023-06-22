export class Vuelos {
    _id?: string;
    num_vuelo: number;
    origen: string;
    destino: string;

    //Investigar sobre formatear el tipo de dato a hora
    //igualmente el de fecha

    hora: string;
    fecha: string;

    //En estos casos investigar sobre como relacionar 
    //los atributos siguientes a los modelos que 
    //corresponden segun la relacion de tablas

    cod_avion: string;
    cod_piloto: string;


    constructor(num_vuelo: number, origen: string, 
        destino: string, hora: string, fecha: string, 
        cod_avion: string, cod_piloto: string){

        this.num_vuelo = num_vuelo;
        this.origen = origen;
        this.destino = destino;
        this.hora = hora;
        this.fecha = fecha;
        this.cod_avion = cod_avion;
        this.cod_piloto = cod_piloto;

    }
}