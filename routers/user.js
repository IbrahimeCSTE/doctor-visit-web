const express = require("express");
const config = require("config");
const bcrypt = "bcryptjs";
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const userRouter = express.Router();

userRouter.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      } else {
        const user = new User({
          name,
          email,
          password,
        });

        await user.save();
        res.send(user);
      }
    } catch (error) {
      console.log(error.message);
      res.send("server error");
    }
  }
);

module.exports = userRouter;
