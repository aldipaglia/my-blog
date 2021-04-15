import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";

function Eliminar() {
  const { postId } = useParams();
  const history = useHistory();
  const [post, setPost] = useState(null);
  return (
    <button
      onClick={() => {
        if (window.confirm("Deseas eliminar este post?"))
          Axios.delete(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            post
          ).then(() => {
            alert("Post eliminado con exito!");
            history.push("/");
          });
      }}
      className="btn btn-danger"
    >
      ELIMINAR
    </button>
  );
}

export default Eliminar;
