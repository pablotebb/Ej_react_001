// El código que se muestra es un componente de React que se encarga de mostrar una tarea individual en una lista de tareas.

// La primera línea importa la función React y el hook useState desde la biblioteca react, que son dependencias necesarias para crear componentes de React y utilizar el hook useState, respectivamente.
import React, { useState } from "react";
// La segunda línea importa la función FontAwesomeIcon desde la biblioteca @fortawesome/react-fontawesome. Esta biblioteca se utiliza para mostrar íconos en el componente.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// La tercera línea importa las constantes faCheckSquare, faEdit, faSquare y faTimes desde la biblioteca @fortawesome/free-solid-svg-icons. Estas constantes representan íconos de la biblioteca Font Awesome que se utilizan en el componente.
import {
  faCheckSquare,
  faEdit,
  faSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// Luego se define una función Tarea que es un componente de React. Este componente recibe cuatro propiedades: tarea, toggleCompletada, editarTarea y borrarTarea.
// La función Tarea utiliza el hook useState para crear dos estados: editandoTarea y nuevaTarea. El estado editandoTarea se utiliza para determinar si el usuario está editando la tarea o no. El estado nuevaTarea se utiliza para almacenar el texto de la tarea mientras se está editando.
const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
  const [editandoTarea, cambiarEditandoTarea] = useState(false);
  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

  // La función Tarea también define una función interna llamada handleSubmit, que se invoca cuando el usuario envía el formulario de edición de tarea. Esta función invoca a la función editarTarea y le pasa el id y el texto actualizado de la tarea, y luego cambia el valor de editandoTarea a false para volver al modo de visualización de tarea.
  const handleSubmit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id, nuevaTarea);
    cambiarEditandoTarea(false);
  };

  // Finalmente, el componente Tarea devuelve el elemento JSX que representa la tarea individual. Este elemento incluye un ícono que indica si la tarea está completada o no, y que permite al usuario marcar o desmarcar la tarea como completada. También incluye el texto de la tarea, que se puede editar haciendo clic en el ícono de edición. Si el usuario está editando la tarea, se muestra un formulario de edición en lugar del texto de la tarea. Finalmente, el elemento incluye íconos para editar o eliminar la tarea. Al hacer clic en estos íconos, se invocan las funciones cambiarEditandoTarea, editarTarea y borrarTarea, respectivamente.
  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={() => toggleCompletada(tarea.id)}
      />
      <div className="lista-tareas__texto">
        {editandoTarea ? (
          <form
            action=""
            className="formulario-editar-tarea"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(e) => cambiarNuevaTarea(e.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => cambiarEditandoTarea(!editandoTarea)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => borrarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Tarea;
