// src/index.ts

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Seleccione una opción: ', (opcion) => {
    ejecutarOpcion(opcion);
    rl.close();
});

function ejecutarOpcion(opcion: string) {
    // Aquí puedes implementar la lógica para manejar la opción seleccionada por el usuario
    console.log(`Ha seleccionado la opción ${opcion}`);
}
