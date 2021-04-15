import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detalle from "./Detalle";
import Editar from "./EditPostForm";
import Home from "./Home";
import NewPost from "./NewPostForm";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">
            <ul className="navbar-nav">
              <Link className="navbar-brand" href="#" to="/">
                MyBlog
              </Link>
              <Link className="nav-item nav-link" to="/newpost">
                New Post
              </Link>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newpost">
            <NewPost />
          </Route>
          <Route path="/editpost/:postId">
            <Editar />
          </Route>
          <Route path="/detalle/:postId">
            <Detalle />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
