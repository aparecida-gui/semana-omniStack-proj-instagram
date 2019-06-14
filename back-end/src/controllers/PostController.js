const Post = require("../models/Post");

module.exports = {
  async index(req, res) {},

  async store(req, res) {
    console.log("req.file: ", req.file);
    console.log("req.body: ", req.body);
    return res.json({ ok: true });
  }
};
