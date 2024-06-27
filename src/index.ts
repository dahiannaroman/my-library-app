// src/index.ts

import { mostrarMenu } from './menu';

// Mostrar el menú inicial
mostrarMenu();

// Escuchar la entrada del usuario
process.stdin.on('data', (data) => {
    const opcion = data.toString().trim(); // Obtener la opción ingresada por el usuario
    
});