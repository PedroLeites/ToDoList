/* 
    tareas.js
    Responsabilidad única: manejar el array de tareas en memoria.
    No conoce el DOM ni LocalStorage.
*/
let tareas = [];

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