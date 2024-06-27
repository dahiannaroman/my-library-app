import { Libro } from '../models/book';
import { Transaccion } from '../models/transaction';

export class bookstoreService {
    private caja: number = 0;
    private catalogo: Map<string, Libro> = new Map();
    private transacciones: Map<string, Transaccion[]> = new Map();

    public insertarLibro(nuevoLibro: Libro): void {
        if (!this.catalogo.has(nuevoLibro.isbn)) {
            this.catalogo.set(nuevoLibro.isbn, nuevoLibro);
            this.transacciones.set(nuevoLibro.isbn, []);
        }
    }

    public buscarLibro(isbn: string): Libro | undefined {
        return this.catalogo.get(isbn);
    }

    public eliminarLibro(isbn: string): boolean {
        if (this.catalogo.has(isbn)) {
            this.catalogo.delete(isbn);
            this.transacciones.delete(isbn);
            return true;
        }
        return false;
    }

    public realizarVenta(isbn: string, cantidad: number): boolean {
        const libro = this.catalogo.get(isbn);
        if (libro && libro.disponible && libro.cantidadActual >= cantidad) {
            libro.cantidadActual -= cantidad;
            this.registrarTransaccion(isbn, 'venta', cantidad);
            this.caja += libro.precioVenta * cantidad;
            return true;
        }
        return false;
    }

    public realizarAbastecimiento(isbn: string, cantidad: number, precioCompra: number): boolean {
        const libro = this.catalogo.get(isbn);
        if (libro) {
            libro.cantidadActual += cantidad;
            libro.precioCompra = precioCompra;
            this.registrarTransaccion(isbn, 'abastecimiento', cantidad);
            return true;
        }
        return false;
    }

    private registrarTransaccion(isbn: string, tipo: 'venta' | 'abastecimiento', cantidad: number): void {
        const transaccion = new Transaccion(tipo, new Date(), cantidad);
        const transaccionesLibro = this.transacciones.get(isbn);
        if (transaccionesLibro) {
            transaccionesLibro.push(transaccion);
        }
    }

    public dineroEnCaja(): number {
        return this.caja;
    }
}
