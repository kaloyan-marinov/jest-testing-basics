const functions = require("../src/functions");

test("should verify that 2 + 2 equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
