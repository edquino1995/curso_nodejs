const fs = require('fs');
const colors = require('colors');

let listar = (base, limite=5) =>{
    console.log('=================='.blue);
    console.log(`Tabla del ${base}`.blue);
    console.log('=================='.blue);

    for(let i =0; i <= limite; i++ ){
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (multiplicador, limite=10) => {
    return new Promise((resolve, reject) => {
        
        if(!Number(multiplicador)){
            reject(`El valor ingresado "${multiplicador}" no es un numero`);
            return;
        }

        let datos = '';

        for (let i = 0; i <= limite; i++) {
            //data += concatena todo el resultado
            datos += `${multiplicador} * ${i} = ${multiplicador * i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        //fs. hace referencia al paquete que acabamos de importar 
        //1. Primer argumento nombre del archivo. 
        //2. Los datos que hemos trabajo.
        //3. Callback notificacion de errores.

        fs.writeFile(`tablas/tabla-${multiplicador}-al-${limite}.txt`, datos, (err) => {
            if (err) 
                reject(err)
            else 
                resolve(`tabla-${multiplicador}-al-${limite}.txt`) 
        });
    });
}


module.exports = {
    crearArchivo,
    listar
}
