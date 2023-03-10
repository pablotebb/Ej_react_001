// Este archivo contiene la lógica y la estructura de nuestra aplicación de gestión de tareas.

import React, { useState, useEffect } from "react"; // Importamos la librería de React y algunos módulos que nos permitirán usar estados y efectos en nuestra aplicación.
import "./App.css"; // Importamos el archivo CSS de nuestra aplicación.
import Header from "./componentes/Header"; // Importamos el componente Header de nuestra aplicación.
import FormularioTareas from "./componentes/FormularioTareas";

import ListaTareas from "./componentes/ListaTareas"; // Importamos el componente ListaTareas de nuestra aplicación.

const App = () => {
  // Obtenemos las tareas guardadas de localstorage.
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  // Establecemos el estado de las tareas.
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  // Guardando el estado dentro de localstorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Accedemos a localstorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === "true";
  }

  // El estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
    configMostrarCompletadas
  );

  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    // Renderizamos nuestra aplicación.
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
};

export default App;
