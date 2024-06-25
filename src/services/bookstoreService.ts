import { Libro } from '../models/book';
import { Transaccion } from '../models/transaction';

export class bookstoreService {
    private caja: number = 1000000; //inversion inicial

    private catalogo: Map<string, Libro> = new Map();

    private transacciones: Map<string, Transaccion[]> = new Map();

    //metodos para gestionar el catalogo y las transacciones
    public insertarLibro(libro:Libro){
        if(!this.catalogo.has(libro.isbn)){
            this.catalogo.set(libro.isbn, libro);
            this.transacciones.set(libro.isbn, []);
        }
    }

    public buscarLibro(isbn:string): Libro | undefined {
        return this.catalogo.get(isbn);
    }

    public eliminarLibro(isbn:string): boolean {
        if(this.catalogo.has(isbn)){
            this.catalogo.delete(isbn);
            this.transacciones.delete(isbn);
            return true;
        }
        return false;
    }

    public realizarVenta(isbn:string, cantidad: number): boolean {
        const libro = this.catalogo.get(isbn);
        if(libro && libro.disponible && libro.cantidadActual >= cantidad){
            libro.cantidadActual -= cantidad;
            this.registrarTransaccion(isbn, 'venta', cantidad);

            this.caja += libro.precioVenta * cantidad;
            return true;
        }
        return false;
    }

    public realizarAbastecimiento(isbn: string, cantidad: number, precioCompra: number): boolean{
        const libro = this.catalogo.get(isbn);
        if(libro){
            libro.cantidadActual += cantidad;
            libro.precioCompra = precioCompra; //actualizar precio compra

            this.registrarTransaccion(isbn, 'abastecimiento', cantidad);
            return true;
        }
        return false;
    }

    private registrarTransaccion(isbn: string, tipo: 'venta' | 'abastecimiento', cantidad: number){
        const transaccion = new Transaccion(tipo, new Date(), cantidad);
        const transaccionesLibro = this.transacciones.get(isbn);
        if(transaccionesLibro){
            transaccionesLibro.push(transaccion);
        }
    }

    public dineroEnCaja(): number{
        return this.caja;
    }
}