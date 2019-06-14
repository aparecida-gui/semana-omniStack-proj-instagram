const express = require("express");
const router = new express.Router();
const multer = require("multer");
const uploadConfig = require("./config/upload");
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");
const upload = multer(uploadConfig);

// passa a imagem pela rota, neste caso apenas uma imagem.
router.post("/posts", upload.single("image"), PostController.store);
router.get("/posts", PostController.index);
// passa-se por parametro qual a imagem que deverá ter um like.
router.post("/posts/:id/like", LikeController.store);

module.exports = router;