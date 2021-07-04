const express = require("express");
const fs = require("fs");
const path = require("path");

const app = new express();
const PORT = 3000;

const allowedOrigins = ["http://127.0.0.1:5500"];
const allowedMethods = ["GET"];

const users = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "users.json"))
);

app.use("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", allowedOrigins);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.get("/", (req, res) => {
  res.send({ message: "Hello, I am your first API response." });
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log("Server started on port:" + PORT);
});
