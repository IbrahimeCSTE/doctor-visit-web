const express = require("express");
const config = require("config");
const { check, validationResult } = require("express-validator");
const Contuct = require("../models/Contuct");

const contuctRouter = express.Router();

contuctRouter.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("subject", "subject is required").not().isEmpty(),
    check("message", "massage is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, subject, message } = req.body;
    try {
      const contuct = new Contuct({
        email,
        subject,
        message,
      });

      await contuct.save();
      res.send(contuct);
    } catch (error) {
      console.log(error.message);
      res.send("server error");
    }
  }
);

module.exports = contuctRouter;
