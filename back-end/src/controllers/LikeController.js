const Post = require("../models/Post");

module.exports = {
  async store(req, res) {
    // busca o post que tenha o id passado por parametro.
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();

    req.io.emit("New like", post);

    return res.json(post);
  }
};