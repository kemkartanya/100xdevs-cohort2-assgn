// Middleware for handling auth
import { Admin } from "../db";
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.header["username"];
  const password = req.header["password"];

  const user = Admin.findOne({ username, password });

  if (!user) res.status(404).send({ message: "Access Denied" });

  next();
}

module.exports = adminMiddleware;
