const http = require('http');
const port = 3000;

const tasks = [
  {
    id: 1,
    nombre: 'Tareas',
    descripcion: 'Hacer las tareas',
    completada: false
  },
  {
    id: 2,
    nombre: 'Entregables',
    descripcion: 'Avanzar',
    completada: true
  },
  {
    id: 3,
    nombre: 'Programador',
    descripcion: 'Ser un programador',
    completada: false
  }
];

const server = http.createServer((req, res) => {
  if (req.url === '/tasks' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

//NOTA: Esta lista de tareas va sin funcionalidades, es decir, solo estoy cumpliendo los item solicitados por Ada School para este entregable. Para visualizar la lista de tareas ejecutable a través de la consola ir a "https://github.com/anyersonjcs/node-server/blob/funciones-lista-tareas/node-server.js"