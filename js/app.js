const listaTareas = document.querySelector("#lista-tareas");
const formulario = document.querySelector("#formulario-tarea");
const inputTexto = document.querySelector("#input-tarea");

tareas = cargarTareas();
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
    checkbox.addEventListener("change", () => {
      alternarCompletada(tarea.id); // Modifica el array (función de tareas.js)
      guardarTareas(tareas); // Persistimos el cambio
      renderizarTareas();           // Vuelve a dibujar la lista completa
    });

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
      eliminarTarea(tarea.id); // Modifica el array (función de tareas.js)
      guardarTareas(tareas) // Persistimos el cambio
      renderizarTareas();      // Vuelve a dibujar la lista completa
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
  });
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Evita que la página se recargue al enviar el formulario
    const texto = inputTexto.value.trim();
    
    if (texto === "") {
        return; // Todavía sin validación visual, solo cortamos la ejecución
    }

    agregarTarea(texto);   // Modifica el array (función de tareas.js)
    guardarTareas(tareas) // Persistimos tareas
    renderizarTareas();    // Vuelve a dibujar la lista completa
    inputTexto.value = ""; // Limpiamos el input para la próxima tarea
});