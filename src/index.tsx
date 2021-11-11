import { HashRouter, Route } from "react-router-dom";

import HashMap from "./pages/HashMap.mdx";
import Home from "./pages/Home.mdx";
import React from "react";
import { render } from "react-dom";

render(
  <HashRouter>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/hashmap/" component={HashMap} />
    </React.Fragment>
  </HashRouter>,
  document.getElementById("root")
);
