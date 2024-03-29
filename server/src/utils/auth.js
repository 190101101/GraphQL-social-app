require("dotenv").config();
const { AuthenticationError, UserInputError } = require("apollo-server");
const jwt = require("jsonwebtoken");

const auth = (context) => {
  const header = context.req.headers.authentication;

  if (!header) {
    throw new UserInputError("Errors", {
      errors: { token: "error authentication" },
    });
  }

  const token = header.split("Bearer ")[1];

  if (!token) {
    throw new UserInputError("Errors", {
      errors: { token: "error token" },
    });
    // throw new AuthenticationError("error token");
  }

  return jwt.verify(token, process.env.SECRET_KEY);
};

module.exports = auth;
