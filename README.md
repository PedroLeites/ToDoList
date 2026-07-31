# Lista de Tareas (To-Do List)

Página web simple para gestionar una lista de tareas pendientes. Permite agregar, completar y eliminar tareas, guardando todo automáticamente en el navegador para que no se pierda nada al recargar la página.

## Funcionalidades

- ➕ Agregar una tarea nueva escribiendo el texto y confirmando (botón o tecla Enter).
- ✅ Marcar una tarea como completada, con estilo visual diferenciado (texto tachado).
- 🗑️ Eliminar una tarea individual.
- 💾 Persistencia de datos: las tareas se guardan en el navegador (LocalStorage) y se mantienen aunque se cierre o recargue la página.
- 🔢 Contador de tareas pendientes.
- ⚠️ Validación: no se permite agregar tareas vacías.

## Cómo ejecutar el proyecto

1. Clonar este repositorio o descargar el ZIP:
```bash
   git clone https://github.com/PedroLeites/ToDoList.git
```
2. Abrir el archivo `index.html` en cualquier navegador (no requiere instalación ni servidor).

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (sin frameworks ni librerías externas)
- LocalStorage (persistencia de datos)
- Git y GitHub (control de versiones)

## Estructura del proyecto
- **todo-list/**
  - `index.html`
  - `README.md`
  - **css/**
    - `estilos.css`
  - **js/**
    - `app.js`
    - `tareas.js`
    - `almacenamiento.js`

- **`almacenamiento.js`**: funciones para guardar y leer datos en LocalStorage.
- **`tareas.js`**: lógica del array de tareas (agregar, eliminar, completar).
- **`app.js`**: conecta los eventos de la interfaz con la lógica y el almacenamiento.