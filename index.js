const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
app.use(cors());
const chefsData = require("./data/chefsData.json");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/chefs-data", (req, res) => {
  res.send(chefsData);
});
app.get("/chefs-data/:id", (req, res) => {
  const id = req.params.id;
  const chefData = chefsData.find((data) => data.id === id);
  res.send(chefData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
