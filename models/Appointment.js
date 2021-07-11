const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema({
  appointDate:{type:String,required:true},
  name: { type: String,required:true },
  phone: { type: Number, required: true },
  male: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: String, required: true },
  date: { type: Date },
});
const Appointment = mongoose.model("appointment", appointmentSchema);
module.exports = Appointment;
