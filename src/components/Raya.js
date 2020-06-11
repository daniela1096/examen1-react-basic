import React from "react";

export default function Raya({palabraEnJuego, letrasCorrectas}) {
  return (
    <div className="row mb-2">
      {letrasCorrectas !== undefined ? letrasCorrectas.map((letra, index) => <p key={index}>{letra}</p>) : ""}

      {palabraEnJuego.split("").map((letra, index) => (
        <span key={index}>          ____            </span>
      ))}
    </div>
  );
}
