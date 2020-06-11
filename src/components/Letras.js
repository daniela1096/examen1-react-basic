import React from "react";
import Boton from "./Boton.js";
import  './Letras.css';

export default function Letras({ abecedario, handleLetraSeleccionada, handlerJuego }) {
  return (
    <div className="row mb-2 containerLetras">
      {abecedario.map((letra, index) => (
        <Boton key={index} letra={letra} handleLetraSeleccionada={handleLetraSeleccionada} handlerJuego={handlerJuego}/>
      ))}
    </div>
  );
}
