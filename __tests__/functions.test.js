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

  /*
  If you
    (a) replace the "Leanne Graham" in instruction #3 with "_not_ Leanne Graham",
    (b) comment out instruction #1,
    and (c) remove the `return` from instruction #3,
  then,
    even though this test should be a FAIL,
    it will be marked by Jest as a PASS.

  If you do (a) and (b),
  then this test should be a FAIL
  and it will be marked by Jest as such.
  _Importantly_,
  the resulting "look" of this test would be exactly aligned
  with the first Promises example under the link within the previous comment.
  
  So, when you are dealing with asynchronous data,
  make sure you follow the guidelines under the link within the previous comment.
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
