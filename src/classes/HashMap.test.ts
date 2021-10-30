const { HashMap } = require("./HashMap");

test("Anagrams have different hashes", () => {
  const hm = new HashMap();

  let hash1 = hm.hash("test"),
    hash2 = hm.hash("tset");

  expect(hash1).not.toEqual(hash2);
});
