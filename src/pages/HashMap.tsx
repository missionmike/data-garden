import { HashMap } from "../classes/HashMap";
import { Layout } from "../components/layout/Layout";
import React from "react";

const HashMapPage = () => {
  const hm = new HashMap();

  hm.set("test", "test 1");
  hm.set("tset", "test 2");
  hm.set("test2", "test 3");

  console.log(hm.raw());

  return (
    <Layout title="Hash Maps">
      <p>And here is where I'll start chopping up Hash Maps.</p>
    </Layout>
  );
};

export { HashMapPage as HashMap };
