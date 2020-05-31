//Existen 3 tipos de require
// 1. los nativos de node.js los cuales no necesitamos instalarlos.
// 2. Los externos por ejemplo: const fs = require('Express'); son externo al ambito nativo de node.js 
// si requieren instalarse para poder ser utilizacos
// 3. Son lo que nosotros creamos y son diferenciados con un path: (./) 

//destructuracion const {}
const {crearArchivo} = require('./multiplicar/multiplicar');
const {listar} = require('./multiplicar/multiplicar');

//al final .argv especificar que de este require solo 
//necesitamos el objeto argv del yargs
const argv = require('./config/yargs').argv;
const colors = require('colors');

//let multiplicador = '6';
//let multiplicador = base.split('=')[1];
//let argv2 = process.argv;
//console.log(argv);

let comando = argv._[0];

switch(comando){

    case 'listar':
        listar(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(result_tabla => console.log(`Archivo Creado ${result_tabla}`))
        .catch(error =>{
           console.log(error);
        })

    break;

    default: 
    console.log('comando no reconocido');

}


