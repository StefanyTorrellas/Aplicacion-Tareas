import React from "react";
import "../hojas-de-estilo/TareaFomulario.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value); //Me va a extraer el valor del campo de texto que ingreso el usuarioo
  };

  const mananejarEnvio = (e) => {
    e.preventDefault(); //esto nos va a permitir que no se nos vuelva a cargar toda la aplicacion cuando enviamso el formulario

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={mananejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
      <button className="create-count">Create count </button>
    </form>
  );
}

export default TareaFormulario;
