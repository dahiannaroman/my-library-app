// menu.ts

import { Libro } from "./models/book";
import { bookstoreService } from "./services/bookstoreService";

const tienda = new bookstoreService();

// Función para mostrar el menú y manejar las opciones
export function mostrarMenu() {
    console.log('==== Menú tienda de libros ====');
    console.log('1. Insertar libro');
    console.log('2. Buscar Libro');
    console.log('3. Eliminar Libro');
    console.log('4. Realizar Venta');
    console.log('5. Realizar abastecimiento');
    console.log('6. Ver dinero en caja');
    console.log('0. Salir');

    // Lee la opción ingresada por el usuario desde la consola
    process.stdout.write('Seleccione una opción: ');
    process.stdin.resume();
    process.stdin.once('data', (data) => {
        const opcion = data.toString().trim(); // Convierte la entrada a string y elimina espacios en blanco

        switch (opcion) {
            case '1':
                insertarLibro();
                break;
            case '2':
                buscarLibro();
                break;
            case '3':
                eliminarLibro();
                break;
            case '4':
                realizarVenta();
                break;
            case '5':
                realizarAbastecimiento();
                break;
            case '6':
                verDineroEnCaja();
                break;
            case '0':
                console.log('Saliendo del programa.');
                process.exit(0);
                break;
            default:
                console.log('Opción no válida.');
                mostrarMenu(); // Vuelve a mostrar el menú si la opción no es válida
                break;
        }
    });
}

// Función para insertar un nuevo libro
function insertarLibro() {
    const nuevoLibro1: Libro = {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        genero: 'Realismo mágico',
        idioma: 'Español',
        precio: 19.99,
        formato: 'Tapa blanda',
        isbn: '9780307350428',
        descripcion: 'Una obra maestra de la literatura latinoamericana que narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo.',
        estado: 'Nuevo',
        ubicacion: 'Estantería principal',
        fecha_publicacion: new Date('1967-05-30'),
        editorial: 'Sudamericana',
        paginas: 432,
        dimensiones: { ancho: 13, profundidad: 3, altura: 20 },
        peso: 300,
        disponible: true,
        nuevoLibro: true,
        precioVenta: 25.99,
        cantidadActual: 15,
        precioCompra: 12.5
    };

    const nuevoLibro2: Libro = {
        titulo: 'Harry Potter y la piedra filosofal',
        autor: 'J.K. Rowling',
        genero: 'Fantasía',
        idioma: 'Español',
        precio: 15.50,
        formato: 'Tapa blanda',
        isbn: '9788498382672',
        descripcion: 'El primer libro de la serie de Harry Potter, que narra las aventuras del joven mago Harry y sus amigos en la escuela de magia Hogwarts.',
        estado: 'Nuevo',
        ubicacion: 'Estantería juvenil',
        fecha_publicacion: new Date('1997-06-26'),
        editorial: 'Salamandra',
        paginas: 256,
        dimensiones: { ancho: 12, profundidad: 2, altura: 19 },
        peso: 250,
        disponible: true,
        nuevoLibro: true,
        precioVenta: 19.99,
        cantidadActual: 20,
        precioCompra: 10.0
    };

    const nuevoLibro3: Libro = {
        titulo: 'El principito',
        autor: 'Antoine de Saint-Exupéry',
        genero: 'Fábula',
        idioma: 'Español',
        precio: 12.99,
        formato: 'Tapa dura',
        isbn: '9789875667317',
        descripcion: 'Una fábula que cuenta la historia de un pequeño príncipe proveniente de un asteroide y su encuentro con un aviador estrellado en el desierto.',
        estado: 'Nuevo',
        ubicacion: 'Estantería clásicos',
        fecha_publicacion: new Date('1943-04-06'),
        editorial: 'Salvat',
        paginas: 96,
        dimensiones: { ancho: 10, profundidad: 1, altura: 15 },
        peso: 150,
        disponible: true,
        nuevoLibro: true,
        precioVenta: 15.99,
        cantidadActual: 12,
        precioCompra: 8.5
    };

    // Aquí puedes seguir agregando más libros según sea necesario

    console.log('Libro agregado:', nuevoLibro1);
    tienda.insertarLibro(nuevoLibro1);
    console.log('Libro agregado:', nuevoLibro2);
    tienda.insertarLibro(nuevoLibro2);
    console.log('Libro agregado:', nuevoLibro3);
    tienda.insertarLibro(nuevoLibro3);

    mostrarMenu(); // Vuelve a mostrar el menú después de ejecutar la opción
}

// Función para buscar un libro por ISBN
function buscarLibro() {
    process.stdout.write('Ingrese el ISBN del libro a buscar: ');
    process.stdin.resume();
    process.stdin.once('data', (data) => {
        const isbnBuscar = data.toString().trim();
        const libroEncontrado = tienda.buscarLibro(isbnBuscar);

        if (libroEncontrado) {
            console.log('Libro encontrado:', libroEncontrado);
        } else {
            console.log('Libro no encontrado.');
        }

        mostrarMenu(); // Vuelve a mostrar el menú después de ejecutar la opción
    });
}

// Función para eliminar un libro por ISBN
function eliminarLibro() {
    process.stdout.write('Ingrese el ISBN del libro a eliminar: ');
    process.stdin.resume();
    process.stdin.once('data', (data) => {
        const isbnEliminar = data.toString().trim();
        const eliminado = tienda.eliminarLibro(isbnEliminar);

        if (eliminado) {
            console.log('Libro eliminado correctamente.');
        } else {
            console.log('No se encontró ningún libro con ese ISBN.');
        }

        mostrarMenu(); // Vuelve a mostrar el menú después de ejecutar la opción
    });
}

// Función para realizar una venta de libros
function realizarVenta() {
    process.stdout.write('Ingrese el ISBN del libro a vender: ');
    process.stdin.resume();
    process.stdin.once('data', (data) => {
        const isbnVenta = data.toString().trim();
        process.stdout.write('Ingrese la cantidad de libros a vender: ');
        process.stdin.resume();
        process.stdin.once('data', (dataCantidad) => {
            const cantidadVenta = parseInt(dataCantidad.toString().trim(), 10);
            const ventaRealizada = tienda.realizarVenta(isbnVenta, cantidadVenta);

            if (ventaRealizada) {
                console.log(`Venta de ${cantidadVenta} libro(s) realizada correctamente.`);
            } else {
                console.log('No se pudo realizar la venta.');
            }

            mostrarMenu(); // Vuelve a mostrar el menú después de ejecutar la opción
        });
    });
}

// Función para realizar un abastecimiento de libros
function realizarAbastecimiento() {
    process.stdout.write('Ingrese el ISBN del libro a abastecer: ');
    process.stdin.resume();
    process.stdin.once('data', (data) => {
        const isbnAbastecimiento = data.toString().trim();
        process.stdout.write('Ingrese la cantidad de libros a abastecer: ');
        process.stdin.resume();
        process.stdin.once('data', (dataCantidad) => {
            const cantidadAbastecimiento = parseInt(dataCantidad.toString().trim(), 10);
            process.stdout.write('Ingrese el precio de compra por libro: ');
            process.stdin.resume();
            process.stdin.once('data', (dataPrecioCompra) => {
                const precioCompra = parseFloat(dataPrecioCompra.toString().trim());
                const abastecimientoRealizado = tienda.realizarAbastecimiento(isbnAbastecimiento, cantidadAbastecimiento, precioCompra);

                if (abastecimientoRealizado) {
                    console.log(`Abastecimiento de ${cantidadAbastecimiento} libro(s) realizado correctamente.`);
                } else {
                    console.log('No se pudo realizar el abastecimiento.');
                }

                mostrarMenu(); // Vuelve a mostrar el menú después de ejecutar la opción
            });
        });
    });
}

// Función para ver el dinero en caja
function verDineroEnCaja() {
    const dineroCaja = tienda.dineroEnCaja();
    console.log(`Dinero en caja: ${dineroCaja}`);
    mostrarMenu(); // Vuelve a mostrar el menú después de ejecutar la opción
}
