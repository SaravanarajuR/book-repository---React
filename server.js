import express from "express";
import bodyparser from "body-parser";
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.json({ message: "hi" });
});

app.post("/", (req, res) => {
  console.log(req.body.mail);
});

app.listen(3000, () => {
  console.log("server started");
});
