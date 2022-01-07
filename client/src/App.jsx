import React from "react";
import Home from "./pages/home/Home";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/movies">
        <Home />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
