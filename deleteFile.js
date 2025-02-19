const fs = require('fs');
const filePath = 'nuevo.txt';

//Verificamos si el archivo existe
if(fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
        if(err) console.error('Error al eliminar el archivo: ', err)
            else console.log('Archivo eliminado con éxito.');
    });
} else console.error(`El archivo ${filePath} no existe.`);

