const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  new User({
    username: username,
    password: password,
  });

  res.status(201).send({ message: "User created successfully" });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  const courses = Course.find();

  res.status(201).send({ courses });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const username = req.headers["username"];
  const courseId = req.params.courseId;

  const user = User.findOne({ username });

  if (!user) res.status(404).send("user not found");

  user.courses = [...user.courses, courseId];
  user.save();

  res.status(201).send({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers["username"];
  const user = User.findOne({ username });

  if (!user) res.status(404).send("user not found");

  res.status(201).send({ purchasedCourses: user.courses });
});

module.exports = router;
