const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(require("./routes"));

mongoose.connect(
  "mongodb+srv://intagram:12345@cluster0-nuwrp.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

// verifica se a conexão com o banco de dados foi realizada.
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error with database: "));
db.once("open", () => {
  console.log("mongoDB run");
});

app.listen(3333, () => console.log("server run port 3333"));