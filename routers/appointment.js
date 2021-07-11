const express = require("express");
const config = require("config");
const { check, validationResult } = require("express-validator");
const Appointment = require("../models/Appointment");

const appointmentRouter = express.Router();

appointmentRouter.get('/',async(req,res)=>{
  const appointmentList=await Appointment.find({})
  if(!appointmentList){
    res.send('No List')
  }
    else{
      res.send(appointmentList)
    }
  
})
appointmentRouter.post(
  "/",
  [
    check("appointDate", "Please include a appointDate").not().isEmpty(),
    check("name", "Please include a name").not().isEmpty(),
    check("phone", "phone is required").not().isEmpty(),
    check("male", "male is required").not().isEmpty(),
    check("age", "age is required").not().isEmpty(),
    check("weight", "weight is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {appointDate, name, phone, male, age, weight } = req.body;
    try {
      const appointment = new Appointment({
        appointDate,
        name,
        phone,
        male,
        age,
        weight,
      });

      await appointment.save();
      res.send(appointment);
    } catch (error) {
      console.log(error.message);
      res.send("server error");
    }
  }
);

module.exports = appointmentRouter;
