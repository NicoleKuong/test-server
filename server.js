const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("hi there");
  res.send("Hello world");
});

app.listen(3111, () => console.log("server started"));
