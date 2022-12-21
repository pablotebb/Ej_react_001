import React from "react"; // Importamos la librería de React.
import ReactDOM from "react-dom"; // Importamos el módulo de ReactDOM, que nos permite renderizar nuestra aplicación en el DOM.
import "./index.css"; // Importamos el archivo CSS de nuestra aplicación.
import App from "./App"; // Importamos nuestra aplicación de React.

ReactDOM.render(
  // Renderizamos nuestra aplicación dentro del elemento con id "root" del DOM.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
