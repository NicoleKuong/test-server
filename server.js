const express = require("express");
const port = process.env.PORT || 3111;

const app = express();

app.get("/", (req, res) => {
  console.log("hi there");
  res.send("Hello world");
});

app.listen(port, () => console.log("server started", "listening:", port));
