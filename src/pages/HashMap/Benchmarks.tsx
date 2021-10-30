import { HashMap } from "../../classes/HashMap";
import React from "react";

const Anagram = () => {
  const hm = new HashMap();

  hm.set("test", "test 1");
  hm.set("tset", "test 2");
  hm.set("ababa", "test 3");
  hm.set("abbba", "test 4");

  console.log(hm.raw());

  return <div></div>;
};

export { Anagram };
