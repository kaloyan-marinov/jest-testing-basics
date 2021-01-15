const functions = require("../src/functions");

test("should verify that 2 + 2 equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test(`should return John Doe's user`, () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  expect(functions.createUser()).not.toBe(user);

  expect(functions.createUser()).toEqual(user);
});
