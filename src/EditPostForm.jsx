import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import FormBase from "./FormBase";

function Editar() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const history = useHistory();

  const ObtenerPost = async () => {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    setPost(res.data);
  };

  useEffect(() => {
    ObtenerPost();
  }, []);

  if (post === null) {
    return (
      <div className="container">
        <h2>Loading...</h2>;
      </div>
    );
  }

  return (
    <div className="container editar">
      <h2>Queres editar tu post?</h2>
      <FormBase
        encabezado="EDITAR POST"
        boton="GUARDAR EDICION"
        titulo={post.title}
        contenido={post.body}
        onSubmit={(post) => {
          Axios.put(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            post
          ).then(() => {
            alert("Post editado con exito!");
            history.push("/");
          });
        }}
      />
    </div>
  );
}

export default Editar;
