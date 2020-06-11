import React from "react";

export default function Boton({ letra, handleLetraSeleccionada, letraUsada }) {

  return (
    <button id={letra} className={letraUsada ? 'activo letra' : 'letra'} value={letra} onClick={handleLetraSeleccionada}>
      {letra}
    </button>
  );
}
