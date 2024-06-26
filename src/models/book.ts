//Libro

import { Libro as LibroType } from '../variables-types';

export class Libro {
    constructor(
        public titulo: string,
        public autor: string,
        public genero: string,
        public idioma: string,
        public precio: number,
        public formato: string,
        public isbn: string,
        public descripcion: string,
        public estado: string,
        public ubicacion: string,
        public fecha_publicacion: Date,
        public editorial: string,
        public paginas: number,
        public dimensiones: { ancho: number; profundidad: number; altura: number },
        public peso: number,
        public disponible: boolean,
        public nuevoLibro: string,
    ) {}
}

export interface Libro {
    precioVenta: number;
    cantidadActual: number; 
    precioCompra: number;
    nuevoLibro: string;
}