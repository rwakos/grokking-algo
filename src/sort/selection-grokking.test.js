const selection = require("./selection-grokking.js");

test("Should sort the array", () => {
  expect(selection([5, 3, 6, 2, 10])).toEqual([2, 3, 5, 6, 10]);
});
