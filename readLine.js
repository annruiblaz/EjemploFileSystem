const fs = require('fs');

//Leer texto linea a linea

/* Versión 1 */
//Importamos el modulo readline para poder hacerlo
const readline = require('readline');

//Creamos el flujo de lectura dsd el archivo texto1.txt
//Lo q nos permite leer el contenido dsd el archivo d forma eficiente sin cargarlo todo en memoria
const stream = fs.createReadStream('texto1.txt');

//Crea una interfaz de lectura utilizando el modulo readline
//Se le pasa el flujo de lectura como entrada, permitiendo procesar el archivo linea x linea
const rl = readline.createInterface({input: stream});

//Evento q se ejecuta x cada linea leida
rl.on('line', (line) => console.log('Linea: ', line));


/* Versión 2 */
//Crea un flujo d lectura dsd el archivo 'texto1.js'
//Q permite leer el contenido del archivo eficientemente sin cargarlo en memoria
const stream2 = fs.createReadStream('test.txt');

//Crea la interfaz d lectura
const readl = readline.createInterface({input: stream2});
//Para llevar la cuenta d la linea q esta leyendo
let numLinea = 1;

//Escucha el evento 'line' q se dispara cada vez q se lee una nueva linea en el archivo
rl.on('line', (line) => {
    //Muestra en consola el num d linea seguido del contenido
    console.log(`Línea ${numLinea}: ${line}`);

    numLinea++;
})
