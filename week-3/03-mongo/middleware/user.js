const { User } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.header["username"];
  const password = req.header["password"];

  const user = User.findOne({ username, password });

  if (!user) res.status(404).send({ message: "Access Denied" });

  next();
}

module.exports = userMiddleware;
