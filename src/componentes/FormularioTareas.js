// Este archivo contiene el componente FormularioTareas de nuestra aplicación de gestión de tareas.
import React, { useState } from "react"; // Importamos la librería de React y el módulo useState para poder utilizar estados en nuestro componente.
import { v4 as uuidv4 } from "uuid"; // librería para generar una clave...
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

// Este código es un componente de React que muestra un formulario para agregar tareas a una lista. El componente recibe dos propiedades, tareas y cambiarTareas, que representan la lista de tareas y una función para cambiarla, respectivamente.
const FormularioTareas = ({ tareas, cambiarTareas }) => {
  // Establecemos el estado para el input de nuestro formulario.
  // El componente utiliza el hook useState para tener un estado para el valor del input del formulario.
  const [inputTarea, cambiarInputTarea] = useState("");

  // La función handleInput se encarga de actualizar el estado del input con el valor que el usuario escribe en él.
  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  };

  // Cuando el usuario envía el formulario, se llama a la función handleSubmit, que previene el comportamiento por defecto del formulario (recargar la página) y agrega una nueva tarea a la lista de tareas utilizando la función cambiarTareas. Además, se limpia el valor del input.
  const handleSubmit = (e) => {
    e.preventDefault();

    cambiarTareas([
      ...tareas,
      {
        id: uuidv4(),
        texto: inputTarea,
        completada: false,
      },
    ]);
    // Limpiamos el input.
    cambiarInputTarea("");
  };

  // El componente finalmente devuelve el formulario con un input y un botón para enviar el formulario. El botón utiliza un ícono de FontAwesome para darle un aspecto más atractivo.
  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

export default FormularioTareas;
