import express from "express";
import bodyparser from "body-parser";
const app = express();
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import expressSession from "express-session";
import connectMongoSession from "connect-mongodb-session";

const mongoSession = connectMongoSession(expressSession);

mongoose.connect(
  "mongodb+srv://saravana1:qwertyuioplkjhgfdsa@cluster0.gdr7v46.mongodb.net/booknology?retryWrites=true&w=majority"
);

import User from "./backend/models/userModel.js";

import Book from "./backend/models/bookModel.js";

const store = new mongoSession({
  uri: "mongodb+srv://saravana1:qwertyuioplkjhgfdsa@cluster0.gdr7v46.mongodb.net/booknology?retryWrites=true&w=majority",
  collection: "session",
  interval: 3600000,
});

app.use(
  expressSession({
    saveUninitialized: false,
    secret: "qwertyuioplkjhgfdsa",
    resave: false,
    store: store,
  })
);

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.json({ message: "hi" });
});

app.get("/signup", (req, res) => {});

app.get("/books", (req, res) => {
  res.json({
    books: async () => {
      await User.find({}).where("email").equals(window.localStorage.mail);
    },
  });
});

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
        mail: req.body.mail,
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
