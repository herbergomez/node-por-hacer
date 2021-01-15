//const argv = require('yargs').argv;

const color = require('colors');
const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer')
    //console.log(argv);

let comando = argv._[0];


switch (comando) {
    case 'crear':
        //   console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        //console.log('Mostrar por hacer');
        let listado = porHacer.getListado();
        for (let tarea1 of listado) {
            console.log(`==========Por Hacer======`.green);
            console.log(tarea1.descripcion);
            console.log('Estado:', tarea1.completado);
            console.log(`==================r======`.green);
        }
        break;
    case 'actualizar':
        // console.log("Actualizar por hacer");
        let resultado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (resultado) {
            console.log("Tarea actualizada con exito");
        } else {
            console.log("No se pudo actualizar la tarea");
        }
        break;
    case 'eliminar':
        // console.log("Actualizar por hacer");
        let respuesta = porHacer.eliminar(argv.descripcion);
        if (respuesta) {
            console.log("Tarea eliminada con exito");
        } else {
            console.log("No se pudo eliminar la tarea");
        }
        break;
    default:
        console.log(`El comando ${comando} es invalido`);
}