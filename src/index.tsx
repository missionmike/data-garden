import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { HashMap } from "./pages/HashMap";

render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/hashmap" component={HashMap} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
