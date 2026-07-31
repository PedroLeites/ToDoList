const listaTareas = document.querySelector("#lista-tareas");
renderizarTareas();

function renderizarTareas() {
  listaTareas.innerHTML = ""; // Limpiamos la lista antes de dibujarla

  tareas.forEach(tarea => {
    const li = document.createElement("li");
    if (tarea.completada) {
        li.className = "tarea completada";
    } else {
        li.className = "tarea";
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;
    // Todavía sin addEventListener: por ahora el checkbox se ve, pero tildarlo no hace nada.

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    // Todavía sin addEventListener: por ahora el botón se ve, pero no elimina nada.

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
  });
}