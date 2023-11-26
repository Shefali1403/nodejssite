const path = require("path");
const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const port = 8000;
const app = express();
const staticPath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "./templates/views");
const partialPath = path.join(__dirname, "./templates/partials");
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));
const apiData = JSON.parse(fs.readFileSync("MOCK_DATA.json", "utf8"));
app.get("/", (req, res) => {
  console.log(apiData[0].id, apiData[0].name);
  res.render("index", { apiData });
});
app.get("/", (req, res) => {
  res.send("Homepage it is");
});
app.listen(port, () => {
  console.log(`Listening the port ${port}`);
});
