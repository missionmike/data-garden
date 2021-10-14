const { HashMap } = require("./HashMap");

test("Anagrams have different hashes", () => {
  const hm = new HashMap();

  let hash1 = hm.hashStr("test"),
    hash2 = hm.hashStr("tset");

  expect(hash1).toEqual(hash2);
});
