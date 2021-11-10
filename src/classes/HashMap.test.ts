const { HashMap } = require("./HashMap");

test("Anagrams have same hashes", () => {
  const hm = new HashMap();

  let hash1 = hm.hash("test"),
    hash2 = hm.hash("tset");

  expect(hash1).toEqual(hash2);
});
