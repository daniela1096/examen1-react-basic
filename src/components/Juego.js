import React from "react";
import Imagen from "./Imagen";
import Raya from "./Raya";
import "./Juego.css";
import intento1 from "../img/cabezon.jpg";
import intento2 from "../img/sinmanos.jpg";
import intento3 from "../img/sinunamano.jpg";
import intento4 from "../img/sindospies.jpg";
import intento5 from "../img/sinunpie.jpg";
import intento6 from "../img/perdio.jpg";

export default function Juego({ palabraEnJuego, numeroIntentos }) {
  return (
    <div className="containerJuego">
      <h2>TIENES {numeroIntentos} INTENTOS</h2>
      {numeroIntentos === 6 ? (
        ""
      ) : numeroIntentos === 5 ? (
        <Imagen imagen={intento1} />
      ) : numeroIntentos === 4 ? (
        <Imagen imagen={intento2} />
      ) : numeroIntentos === 3 ? (
        <Imagen imagen={intento3} />
      ) : numeroIntentos === 2 ? (
        <Imagen imagen={intento4} />
      ) : numeroIntentos === 1 ? (
        <Imagen imagen={intento5} />
      ) : (
        <Imagen imagen={intento6} />
      )}
      <Raya palabraEnJuego={palabraEnJuego} />
    </div>
  );
}
