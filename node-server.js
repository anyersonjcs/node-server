const readlineSync = require('readline-sync');

const tasks = [];
let nextId = 1;

function leerEntrada() {
  console.log('Bienvenido. Qué deseas hacer?');
  const opciones = ['Agregar', 'Eliminar', 'Completar', 'Ver tareas', 'Salir'];
  const opcionIndex = readlineSync.keyInSelect(opciones, 'Selecciona una opcion:'); 

  switch (opcionIndex) {
    case 0: 
      const nombre = readlineSync.question('Cual es el nombre de la tarea que deseas agregar? ');

      const tarea = {
        id: nextId++,
        nombre: nombre,
        completada: false
      };

      tasks.push(tarea);

      console.log('Tarea agregada.');

      leerEntrada();
      break;
    case 1: 
      const eliminarId = readlineSync.question('Cual es el id de la tarea que deseas eliminar? ');

      const indice = tasks.findIndex((tarea) => tarea.id === parseInt(eliminarId));

      if (indice !== -1) {
        tasks.splice(indice, 1);

        nextId = tasks.reduce((maxId, tarea) => Math.max(maxId, tarea.id), 0) + 1;

        reordenarIds();

        console.log('Tarea eliminada.');

        leerEntrada();
      } else {
        console.log('Tarea no encontrada.');

        leerEntrada();
      }
      break;
    case 2: 
      const completarId = readlineSync.question('Cual es el id de la tarea que deseas completar? ', {cancel: false, guide: false});

      const tareaCompletar = tasks.find((tarea) => tarea.id === parseInt(completarId));

      if (tareaCompletar) {
        tareaCompletar.completada = true;

        console.log('Tarea completada.');

        leerEntrada();
      } else {
        console.log('Tarea no encontrada.');

        leerEntrada();
      }
      break;
    case 3: 
      console.log('Tareas:');

      tasks.forEach((tarea) => {
        console.log(`- [${tarea.completada ? 'x' : ' '}] ${tarea.id}: ${tarea.nombre}`);
      });
        //La "X" esta queriendo decir: "Completada"
      leerEntrada();
      break;
    case 4: 
      console.log('Gracias por usar el Administrador de Tareas de Anyerson. Adios!');
      break;
    default:
      leerEntrada();
  }
}

function reordenarIds() {
  tasks.forEach((tarea, index) => {
    tarea.id = index + 1;
  });
}

leerEntrada();
