/*
    almacenamiento.js
    Responsabilidad única: leer y escribir en LocalStorage.
    No conoce el DOM ni la lógica de negocio.
*/
const CLAVE_STORAGE = "tareas";

function guardarTareas(tareas) {
    const tareasJSON = JSON.stringify(tareas);
    localStorage.setItem(CLAVE_STORAGE, tareasJSON);
}

function cargarTareas() {
    const tareasJSON = localStorage.getItem(CLAVE_STORAGE);
    
    if (tareasJSON === null) {
        return [];
    }
    
    return JSON.parse(tareasJSON);
}