const functions = require("../src/functions");

test("should verify that 2 + 2 equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test(`should _asynchronously_ fetch Leanne Graham's user`, () => {
  /*
  https://jestjs.io/docs/en/asynchronous >>
  When you have [JavaScript] code that runs asynchronously,
  Jest needs to know when the code it is testing has completed,
  before it can move on to another test.
  Jest has several ways to handle this.

  [Read the link for examples of those several ways.]
  */

  /* Verify that a certain # of assertions are called */
  expect.assertions(1);

  const promise = functions.fetchUser();

  /*
  If you omit [the following] `return` statement,
  [the] test will complete before
    the promise returned from [`functions.fetchUser`] resolves.
    and `then()` has a chance to execute [its] callback.
  */
  return promise.then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
