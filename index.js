const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri =
  "mongodb+srv://hamsaomar21:hamsaomar21@cluster0.iaryh.mongodb.net/chattestDB?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database successfully established");
});

const userRouter = require("./routes/user.js");
const googleuserRouter = require("./routes/googleuser.js");

app.use("/", userRouter);
app.use("/google", googleuserRouter);

app.listen(port, () => {
  console.log("listening on port " + port);
});
