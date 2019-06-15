const multer = require("multer");
const path = require("path");

module.exports = {
  storage: new multer.diskStorage({
    // o caminho relativo onde será armazenada as imagens.
    destination: path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "uploads"
    ),
    filename: function(req, file, cd) {
      cd(null, file.originalname);
    }
  })
};