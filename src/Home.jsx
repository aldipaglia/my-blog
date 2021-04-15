import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Eliminar from "./Eliminar";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const obtenerPosts = async () => {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;
    setPosts(posts);
  };

  useEffect(() => {
    obtenerPosts();
  }, []);

  console.log(posts);

  return (
    <div className="Home container">
      <h2 className="mt-4">WELCOME TO MYBLOG</h2>
      {posts.map((item) => (
        <div className="list-group">
          <div className="list-group-item d-flex align-items-center">
            <Link to={`/detalle/${item.id}`} key={item.id}>
              {item.title}
            </Link>
            <div className="ms-auto d-flex align-items-center">
              <div className="px-2">
                <Link to={`/editpost/${item.id}`} className="btn btn-success">
                  EDITAR
                </Link>
              </div>
              <div className="px-2">
                <Eliminar />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
