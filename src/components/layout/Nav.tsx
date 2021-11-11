import "./Nav.scss";

import { Link } from "react-router-dom";
import React from "react";

const Nav = () => (
  <nav>
    <Link to="/">Garden 🌱</Link>
    <Link to="/hashmap">Hash Maps</Link>
  </nav>
);

export { Nav };
