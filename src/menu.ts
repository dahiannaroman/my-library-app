import { bookstoreService } from "./services/bookstoreService";
import { Libro } from "./models/book";

const tienda = new bookstoreService();

function mostrarMenu() {
    console.log('==== Menú tienda de libros ====');
    console.log('1. Insertar libro');
    console.log('2. Buscar Libro');
    console.log('3. Eliminar Libro');
    console.log('4. Realizar Venta');
    console.log('5. Realizar abastecimiento');
    console.log('6. Ver dinero en caja');
    console.log('0. Salir');
}

function ejecutarOpcion(opcion: string) {
    switch (opcion) {
        case '1':
            const nuevoLibro: Libro = {
                titulo: 'Ejemplo de Libro',
                autor: 'Autor Ejemplo',
                genero: 'Ficción',
                idioma: 'Español',
                precio: 25.99,
                formato: 'Tapa dura',
                isbn: '1234567890',
                descripcion: 'Descripción del libro.',
                estado: 'Nuevo',
                ubicacion: 'Estante 1',
                fecha_publicacion: new Date('2020-01-01'),
                editorial: 'Editorial Ejemplo',
                paginas: 300,
                dimensiones: { ancho: 15, profundidad: 2, altura: 22 },
                peso: 500,
                disponible: true,
            };
            tienda.insertarLibro(nuevoLibro);
            break;
        case '2':
            const isbnBuscar = '1234567890';
            const libroEncontrado = tienda.buscarLibro(isbnBuscar);
            console.log('Libro encontrado:', libroEncontrado);
            break;
        case '3':
            const isbnEliminar = '1234567890';
            const eliminado = tienda.eliminarLibro(isbnEliminar);
            console.log('Libro eliminado:', eliminado);
            break;
        case '4':
            const isbnVenta = '1234567890';
            const cantidadVenta = 1;
            const ventaRealizada = tienda.realizarVenta(isbnVenta, cantidadVenta);
            console.log('Venta realizada:', ventaRealizada);
            break;
        case '5':
            const isbnAbastecimiento = '1234567890';
            const cantidadAbastecimiento = 10;
            const precioCompra = 15.5;
            const abastecimientoRealizado = tienda.realizarAbastecimiento(isbnAbastecimiento, cantidadAbastecimiento, precioCompra);
            console.log('Abastecimiento realizado:', abastecimientoRealizado);
            break;
        case '6':
            const dineroCaja = tienda.dineroEnCaja();
            console.log('Dinero en caja:', dineroCaja);
            break;
        case '0':
            console.log('Saliendo del programa.');
            process.exit(0);
            break;
        default:
            console.log('Opción no válida.');
            break;
    }
}