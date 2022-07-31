const binary = require("./binary.js");

test("Should find number 7", () => {
  expect(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(true);
});

test("Should not find number 24", () => {
  expect(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 24)).toBe(false);
});
