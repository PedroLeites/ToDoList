let tareas = [
    { id: 1, texto: "Repasar HTML y CSS", completada: true },
    { id: 2, texto: "Practicar funciones en JavaScript", completada: false },
    { id: 3, texto: "Subir el proyecto a GitHub", completada: false }
];

// Forma de una tarea: { id: number, texto: string, completada: boolean }

function agregarTarea(texto) {
  const nuevaTarea = {
    id: Date.now(), // Usamos la fecha y hora actual en milisegundos como id único.
    texto: texto,
    completada: false
  };

  tareas.push(nuevaTarea);
  return nuevaTarea;
}

function eliminarTarea(id) {
  tareas = tareas.filter(tarea => tarea.id !== id);
}

function alternarCompletada(id) {
  const tarea = tareas.find(tarea => tarea.id === id);

  if (tarea) {
    tarea.completada = !tarea.completada;
  }
}

function contarPendientes() {
  return tareas.filter(tarea => !tarea.completada).length;
}