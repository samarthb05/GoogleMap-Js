const express = require("express");

const app = express();
const port = 3001;

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server listen to ${port}`);
});
