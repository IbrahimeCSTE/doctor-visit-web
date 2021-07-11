const express = require("express");
const authRouter = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

authRouter.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "invalid user" }] });
      } else if (password !== user.password) {
        return res.status(400).json({ errors: [{ msg: "invalid user" }] });
      } else {
        res.send(user);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = authRouter;
