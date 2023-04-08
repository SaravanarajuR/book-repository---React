import express from "express";
import bodyparser from "body-parser";
const app = express();
import bcrypt from "bcrypt";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://saravana1:qwertyuioplkjhgfdsa@cluster0.gdr7v46.mongodb.net/booknology?retryWrites=true&w=majority"
);

import User from "./backend/models/userModel.js";

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.json({ message: "hi" });
});

app.get("/signup", (req, res) => {});

app.post("/signup", async (req, res) => {
  const findUser = await User.findOne({ mail: req.body.mail });
  if (findUser === null) {
    const password = req.body.pass;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ mail: req.body.mail, password: hashedPassword });
    user.save();
  } else {
    return res.status(200).json({
      warning: "mail already exists",
    });
  }
});

app.post("/", async (req, res) => {
  const data = await User.findOne({ mail: req.body.mail });
  if (data) {
    const found = await bcrypt.compare(req.body.password, data.password);
    if (found) {
      return res.status(200).json({
        success: true,
        redirect: "/",
      });
    } else {
      return res.status(200).json({
        success: false,
        redirect: "/",
        warning: "Wrong Password",
      });
    }
  } else {
    return res.status(200).json({
      success: false,
      redirect: "/",
      warning: "Email does not exists",
    });
  }
});

app.listen(5000, () => {
  console.log("server started");
});
