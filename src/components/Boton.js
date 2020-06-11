import React from "react";

export default function Boton({ letra, handleLetraSeleccionada }) {

  return (
    <button id={letra} className="letra" value={letra} onClick={handleLetraSeleccionada}>
      {letra}
    </button>
  );
}
