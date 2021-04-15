import React, { useState } from "react";
import Axios from "axios";

function FormBase(props) {
  const [titulo, setTitulo] = useState(props.titulo || "");
  const [contenido, setContenido] = useState(props.contenido || "");

  return (
    <div className="form-group contenedor-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form"
      >
        <h1>
          {props.encabezado} <hr></hr>
        </h1>
        <div className="form-control titulo mb-3">
          <label htmlFor="" className="form-label">
            TITULO
          </label>
          <input
            className="form-control"
            type="text"
            value={titulo}
            onChange={(e) => {
              setTitulo(e.target.value);
            }}
            placeholder="Ingresa un titulo llamativo para tu posteo"
          />
        </div>
        <div className="form-control contenido mb-3">
          <label htmlFor="" className="form-label">
            CONTENIDO
          </label>
          <input
            className="form-control"
            type="text"
            value={contenido}
            onChange={(e) => {
              setContenido(e.target.value);
            }}
            placeholder="Expresate rey"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-success "
            onClick={() => {
              if (titulo === "" && contenido === "") {
                alert(
                  "para que tocas POSTEAR si no escribiste nada loco? la concha bien de tu madre"
                );
              } else if (titulo === "") {
                alert("El titulo no puede estar vacio");
              } else if (contenido === "") {
                alert(
                  "Tu post no tiene contenido, escribe algo para postearlo"
                );
              } else {
                props.onSubmit({
                  title: titulo,
                  body: contenido,
                });
              }
            }}
          >
            {props.boton}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormBase;
