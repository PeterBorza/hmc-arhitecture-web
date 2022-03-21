const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express(); // create express app
app.use(cors());

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/images.json", (req, res) => res.send());

// start express server on port 5020
const port = process.env.PORT || 5020;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
