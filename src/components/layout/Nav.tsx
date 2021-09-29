import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/hashmap">Hash Maps</Link>
  </nav>
);

export { Nav };
