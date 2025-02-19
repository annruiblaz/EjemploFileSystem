const fs = require('fs');

//Copia el archivo.txt a copia.txt
fs.copyFile('archivo.txt', 'copia.txt', (err) => {
    if (err) console.error('Error al copiar el archivo: ', err)
    else console.log('Fichero copiado con éxito');
});
