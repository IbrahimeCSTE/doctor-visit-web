
const express = require("express");
const path = require('path');
const connectDB = require("./config/db");
const appointmentRouter = require("./routers/appointment");
const authRouter = require("./routers/auth");
const contuctRouter = require("./routers/contuct");
const userRouter = require("./routers/user");
const app = express();
app.use(express.json());

//db
connectDB();


app.use("/api/users/register", userRouter);
app.use("/api/users/login", authRouter);
app.use("/api/users/contuct", contuctRouter);
app.use("/api/users/appointment", appointmentRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
