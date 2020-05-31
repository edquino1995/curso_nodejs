const opts = {
    base:{
        demand:true,
        alias:'b'
    },
    limite: {
        alias: 'l',  
        default: 10
    }
}

const argv = require('yargs')
            .command('listar','Imprime en consola la tabla de multiplicar', opts)
            .command('crear','Crear las tabla de multiplicar con un limite',opts)
            .help()
            .argv;


module.exports = {
    argv
}