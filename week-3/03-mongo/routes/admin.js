const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  new Admin({
    username: username,
    password: password,
  });

  res.status(201).send({ message: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic

  const { title, description, price, imageLink } = req.body;

  const course = new Course({
    title,
    description,
    price,
    imageLink,
  });

  res
    .status(201)
    .send({ message: "Course created successfully", courseId: course._id });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic

  const courses = Course.find();

  res.status(201).send({ courses });
});

module.exports = router;
