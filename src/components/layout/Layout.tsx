import React from "react";
import "./Layout.scss";
import { Nav } from "./Nav";

const Layout = ({
  title = "",
  children,
}: {
  title?: string;
  children?: React.ReactElement;
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
