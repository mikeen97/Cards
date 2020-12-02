import React from "react";
import "../Styles/Table.css";

function Bienvenida(props) {
  return (
    <div className="contianer">
      <div className="Fitness-User-Info">
        <h1>Bienvenido a la seccion de Bodega {props.username}</h1>
        <p>
          Recuerda siempre mantener actualizada tus bodegas y cerrar sesion al
          terminar de gestionar todo
        </p>
      </div>
    </div>
  );
}

export default Bienvenida;
