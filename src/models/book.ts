//Libro

import { Libro as LibroType } from '../variables-types';

export interface Libro {
    titulo: string;
    autor: string;
    genero: string;
    idioma: string;
    precio: number;
    formato: string;
    isbn: string;
    descripcion: string;
    estado: string;
    ubicacion: string;
    fecha_publicacion: Date;
    editorial: string;
    paginas: number;
    dimensiones: { ancho: number; profundidad: number; altura: number };
    peso: number;
    disponible: boolean;
    nuevoLibro: boolean; // Por ejemplo, una propiedad adicional que debe estar en la interfaz Libro
    precioVenta: number;
    cantidadActual: number;
    precioCompra: number;
}
