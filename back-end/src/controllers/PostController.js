const Post = require("../models/Post");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  async index(req, res) {
    // busca todas as imagens e as ordena de acordo com o -createdAt,
    // ou seja pelo ultimo post que foi adiciona(criado).
    const posts = await Post.find().sort("-createdAt");
    res.json(posts);
  },

  async store(req, res) {
    console.log("req.file: ", req.file);
    console.log("req.body: ", req.body);

    // desestrutura o objeto.
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    // adiciona a extenção jpg a imagem.
    const [name] = image.split(".");
    const fileName = `${name}.jpg`;

    // manipula a imagem.
    await sharp(req.file.path)
    .resize(500)
    .jpeg({quality: 70})
    .toFile(
      path.resolve(req.file.destination, "resized", fileName)
    )

    fs.unlinkSync(req.file.path);

    // cria um post.
    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: fileName
    });

    req.io.emit("post", post);

    return res.json(post);
  }
};