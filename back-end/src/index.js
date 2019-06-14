const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(require("./routes"));

mongoose.connect(
  "mongodb+srv://intagram:12345@cluster0-nuwrp.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.listen(3333, () => console.log("server run port 3333"));