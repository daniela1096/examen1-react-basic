import React from "react";

export default function Raya({palabraEnJuego, letraCorrecta}) {
  return (
    <div className="row mb-2">
     
      {console.log(letraCorrecta)}

      {palabraEnJuego.split("").map((letra, index) => (
        <span key={index}>  {letra === letraCorrecta ? letra : " ____ "} </span>
      ))}
    </div>
  );
}
