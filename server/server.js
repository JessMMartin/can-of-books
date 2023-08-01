const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

const Cat = require("./models/cat");

const PORT = process.env.PORT || 8090;

const app = express();
app.use(cors());
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL);
// mongoose
//   .connect(process.env.DATABASE_URL)
//   .then(() => console.log("connected"))
//   .catch((e) => console.log(e));

app.get("/", (request, response) => {
  response.status(200).json("Hey diddledoe!");
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));