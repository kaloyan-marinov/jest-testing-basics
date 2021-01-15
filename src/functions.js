const functions = {
  add: (num1, num2) => num1 + num2,
  createUser: () => {
    const user = {
      firstName: "John",
      lastName: "Doe",
    };
    return user;
  },
};

module.exports = functions;
