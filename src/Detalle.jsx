import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";
import Eliminar from "./Eliminar";

const Detalle = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const history = useHistory();

  const obtenerPost = async () => {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    setPost(res.data);
  };

  useEffect(() => {
    obtenerPost();
  }, []);

  if (!post) {
    return (
      <div className="container">
        <h2>Loading...</h2>;
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <div className="d-flex align-items-center">
        <button
          type="submit"
          className="btn btn-light "
          onClick={() => history.goBack()}
        >
          ATRAS
        </button>
        <Link to={`/editpost/${postId}`} className="btn btn-success">
          EDITAR
        </Link>
        <Eliminar />
      </div>
    </div>
  );
};

export default Detalle;
