import React from "react";
import FormBase from "./FormBase";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function NuevoPost() {
  const history = useHistory();

  return (
    <div className="container">
      <h2>Queres subir un nuevo post?</h2>
      <FormBase
        encabezado="NUEVO POST"
        boton="POSTEAR"
        onSubmit={(post) => {
          Axios.post(`https://jsonplaceholder.typicode.com/posts/`, post).then(
            () => {
              alert("post subido correctamente! Espera por tus likes");
              history.push("/");
            }
          );
        }}
      />
    </div>
  );
}

export default NuevoPost;
