import "./Layout.scss";

import Code from "../Code";
import { MDXProvider } from "@mdx-js/react";
import { Nav } from "./Nav";
import React from "react";
import { preToCodeBlock } from "mdx-utils";

const components = {
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    } else {
      return <pre {...preProps} />;
    }
  },
};

const Layout = ({
  title = "",
  children,
}: {
  title?: string;
  children?: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <React.Fragment>
      <header>
        <Nav />
      </header>
      <main>
        {title.length > 0 && <h1>{title}</h1>}
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
      <footer>
        <p style={{ textAlign: "center" }}>
          A seedling by{" "}
          <a href="https://www.missionmike.dev/about/">Mission Mike</a>
        </p>
      </footer>
    </React.Fragment>
  );
};

export { Layout };
