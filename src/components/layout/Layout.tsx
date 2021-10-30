import "./Layout.scss";

import { Nav } from "./Nav";
import React from "react";

const Layout = ({
  title = "",
  children,
}: {
  title?: string;
  children?: React.ReactElement | React.ReactElement[];
}) => (
  <React.Fragment>
    <header>
      <Nav />
    </header>
    <main>
      {title.length > 0 && <h1>{title}</h1>} {children}
    </main>
  </React.Fragment>
);

export { Layout };
