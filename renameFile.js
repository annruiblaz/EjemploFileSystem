const fs = require('fs');

//Cambia el nombre del archivo.txt a nuevo.txt
fs.rename('archivo.txt', 'nuevo.txt', (err) => {
    if (err) console.error('Error al renombrar el archivo: ', err)
        else console.log('Fichero renombrado con éxito');

});
