const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();
const server = require("http").Server(app);
const socketIo = require("socket.io")(server);

app.use(cors());

app.use((req, res, next) => {
  req.io = socketIo;
  next();
});
// adiciona o caminho de acesso para as imagens que estão na pasta uploads/resized.
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "..", "uploads", "resized"))
);
app.use(require("./routes"));

mongoose.connect(
  "mongodb+srv://intagram:12345@cluster0-nuwrp.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

// verifica se a conexão com o banco de dados foi realizada ou não.
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error with database: "));
db.once("open", () => {
  console.log("mongoDB run");
});

server.listen(3333, () => console.log("server run port 3333"));
