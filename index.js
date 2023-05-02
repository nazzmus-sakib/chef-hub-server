const express = require("express");
const app = express();
const port = 3000;
const chefsData = require("./data/chefsData.json");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/chefs-data", (req, res) => {
  res.send(chefsData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
