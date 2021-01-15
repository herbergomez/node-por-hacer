const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    demand: true,
    alias: 'c',
    default: true
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('eliminar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}