const fs = require('fs');
const { text } = require('stream/consumers');

const filePath = 'archivo.txt';

const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nulla porta dolor enim, id eleifend odio maximus non. Maecenas eu commodo lectus. Nulla tincidunt leo eget nulla vehicula, sit amet vehicula dui gravida.
    Aenean faucibus dolor eu efficitur accumsan. Suspendisse ut felis urna. Donec non velit pharetra, vehicula enim nec, fringilla neque.`;


//Crea o abre (si ya exisita) un archivo en modo a+ (lectura / escritura)
/* fs.open('archivo.txt', 'a+', (err, fd) => {
    if( err ) {
        console.error('No se puede crear o abrir el fichero.', err);
    } else {
        console.log('Se ha creado el archivo o ya existia');
        fs.close(fd, () => {}); //Cerramos el archivo
    }
}); */

//Verifica si el archivo existe antes de abrirlo
fs.access(filePath, fs.constants.F_OK, (err) => {
    const existiaAntes = !err; //Si no hay error es xq el archivo ya existia

    //Crea o abre (si ya exisita) un archivo en modo a+ (lectura / escritura)
    // ** Al utilizar 'a+' lo añadirá al final del archivo (append)
    fs.open('archivo.txt', 'a+', (err, fd) => {
        if( err ) {
            console.error('No se puede crear o abrir el fichero.', err);
        } else {
            console.log(existiaAntes ? 'El archivo ya existia' : 'Se ha creado el archivo');
            fs.close(fd, () => {}); //Cierra el archivo
        }
    });
});

//Escribe el txt en el archivo (es asincrono)
// **sobrescribiendolo si ya existe el archivo
fs.writeFile('texto1.txt', texto, (err) => {
    if(err) {
        console.log('Error al escribir en el archivo:', err);
    } else {
        console.log('Texto almacenado correctamente');
    }
});

//Escribir el txt en el archivo pero d manera sincrona
// ** Tambien sobrescribiendolo si ya existe el archivo
try {
    fs.writeFileSync('textoSincrono.txt', texto);
    console.log('Texto almacenado con exito.');
} catch(e) {
    console.error(e);
}


//Igual pero separando el proceso de abrir + escribir
//** Al utilizar 'w' machaca el contenido anterior del fichero
fs.open('archivo2.txt', 'w', (err, fd) => {
    if( err ) throw err;

    fs.write(fd, 'Contenido nuevo', (err) => {
        if (err) throw err;
        console.log('Archivo escrito con éxito.');

        fs.close(fd, (err) => {
            if (err) throw err;
            console.log('Archivo cerrado.');
        });
    });
});

//Para leer el txt d un archivo
fs.readFile('texto1.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Error al leer el archivo: ', err);
    } else {
        console.log('Contenido del archivo: ', data);
    }
});

//Para añadir texto al final del archivo
fs.open('archivo.txt', 'a+', (err, fd) => {
    if (err) throw err;

    fs.write(fd, ' Nuevo contenido añadido.', (err) => {
        if (err) throw err;

        console.log('Contenido añadido correctamente.');

        //Leer contenido del archivo despues d escribir
        fs.readFile('archivo.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log('Contenido actual del archivo:', data);
        });
    
        //Cerramos archivo
        fs.close(fd, (err) => {
            if (err) throw err;
            console.log('Archivo cerrado.');
        });
    });
});


