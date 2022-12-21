import React from "react"; // La primera línea importa la función React desde la biblioteca react, que es una dependencia necesaria para crear componentes de React.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons"; // La segunda línea importa la función FontAwesomeIcon y la constante faEyeSlash y faEye desde la biblioteca @fortawesome/react-fontawesome y @fortawesome/free-solid-svg-icons, respectivamente. Estas bibliotecas se utilizan para mostrar íconos en el componente.

// Luego se define una función Header que es un componente de React. Este componente recibe dos propiedades, mostrarCompletadas y cambiarMostrarCompletadas.
const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
  // La función Header define una función interna llamada toggleCompletadas que invoca a la función cambiarMostrarCompletadas y le pasa el valor opuesto al valor actual de mostrarCompletadas. Esto cambia el valor de mostrarCompletadas y hace que el componente se vuelva a renderizar.
  const toggleCompletadas = () => {
    cambiarMostrarCompletadas(!mostrarCompletadas);
  };

  // Finalmente, el componente Header devuelve el elemento JSX que representa el encabezado de la lista de tareas. Este elemento incluye un título y un botón que permite al usuario mostrar o ocultar tareas completadas. El botón cambia su etiqueta y ícono dependiendo del valor de mostrarCompletadas. Al hacer clic en el botón, se invoca a la función toggleCompletadas, lo que cambia el valor de mostrarCompletadas y hace que el componente se vuelva a renderizar.
  return (
    <header className="header">
      <h1 className="header__titulo">Lista de Tareas</h1>
      {mostrarCompletadas ? (
        <button className="header__boton" onClick={() => toggleCompletadas()}>
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
        </button>
      ) : (
        <button className="header__boton" onClick={() => toggleCompletadas()}>
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
        </button>
      )}
    </header>
  );
};

export default Header;
