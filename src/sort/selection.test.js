const selectionSort = require("./selection.js");

test("Should also sort the array", () => {
  expect(selectionSort([5, 3, 6, 2, 10])).toEqual([2, 3, 5, 6, 10]);
});
