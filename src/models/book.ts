//Libro

import { Book } from '../variables-types';

export class Libro implements Book {
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
    ) {}
}
