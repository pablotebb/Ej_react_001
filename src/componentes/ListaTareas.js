// La primera línea importa la función React desde la biblioteca react, que es una dependencia necesaria para crear componentes de React.
import React from "react";
// La segunda línea importa el componente Tarea desde otro archivo. Este componente se encargará de mostrar una tarea individual en la lista.
import Tarea from "./Tarea";

// Luego se define una función ListaTareas que es un componente de React. Este componente recibe tres propiedades: tareas, cambiarTareas y mostrarCompletadas.
// La función ListaTareas define tres funciones internas llamadas toggleCompletada, editarTarea y borrarTarea.
const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
  // La función toggleCompletada recibe un id de tarea y cambia el valor de la propiedad completada de la tarea con ese id a su valor opuesto. Esto se hace invocando a la función cambiarTareas y pasándole un nuevo arreglo de tareas en el que se ha modificado la tarea con el id especificado.
  const toggleCompletada = (id) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
      })
    );
  };

  // La función editarTarea recibe un id de tarea y un nuevoTexto, y cambia el valor de la propiedad texto de la tarea con ese id al nuevoTexto especificado. Esto se hace invocando a la función cambiarTareas y pasándole un nuevo arreglo de tareas en el que se ha modificado la tarea con el id especificado.
  const editarTarea = (id, nuevoTexto) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, texto: nuevoTexto };
        }
        return tarea;
      })
    );
  };

  // La función borrarTarea recibe un id de tarea y elimina la tarea con ese id del arreglo de tareas. Esto se hace invocando a la función cambiarTareas y pasándole un nuevo arreglo de tareas que no incluye la tarea con el id especificado.
  const borrarTarea = (id) => {
    cambiarTareas(
      tareas.filter((tarea) => {
        if (tarea.id !== id) {
          return tarea;
        }
        return;
      })
    );
  };

  // Finalmente, el componente ListaTareas devuelve el elemento JSX que representa la lista de tareas. Este elemento incluye una etiqueta ul con una lista de elementos Tarea. Si no hay tareas en el arreglo, se muestra un mensaje informativo. Cada elemento Tarea recibe las funciones toggleCompletada, editarTarea y borrarTarea como propiedades, junto con la tarea individual que se está mostrando. Si el valor de mostrarCompletadas es true, se muestran todas las tareas. Si es false, solo se muestran las tareas que no están completadas.
  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          if (mostrarCompletadas) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
            // Si la tarea no esta completada, la devolvemos.
          } else if (!tarea.completada) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
          }
          // Si ya esta completada no la devolvemos
          return;
        })
      ) : (
        <div className="lista-tareas__mensaje">~ No hay tareas agregadas ~</div>
      )}
    </ul>
  );
};

export default ListaTareas;
