const fs = require('fs');
const path = require('path');
const filePath = 'datos_prueba.txt';

//Verificamos si el archivo existe antes de intentar leerlo
if(fs.existsSync(filePath)) {
    console.log(`\n=== Leyendo el archivo ${filePath} ===\n`);
    //Abrimos el archivo en solo modo lectura
    const contenido = fs.readFileSync(filePath, 'utf8');

    //Separamos el contenido en linea (en caso d q tenga + de 1)
    const lineas = contenido.split('\n');

    if(lineas.length > 0) {
        //Tomamos la primera linea
        const primeraLinea = lineas[0];

        //Separamos los valores usando el delimitador ';'
        const tokens = primeraLinea.split(';');
        //Mostramos los 2 primeros valores si existen
        if(tokens.length > 0) {
            console.log(`--> ${tokens[0]}`);
        } 
        if (tokens.length > 1) {
            console.log(`--> ${tokens[1]}`);
        }
    } else {
        console.log(`El archivo está vacío.`);
    }
} else {
    console.log(`El archivo ${filePath} no existe.`);
}