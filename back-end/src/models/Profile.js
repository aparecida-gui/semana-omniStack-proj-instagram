const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    name: String,
    name_user: String,
    publication: {
      type: Number,
      default: 0
    },
    followers: {
      type: Number,
      default: 0
    },
    following: {
      type: Number,
      default: 0
    },
    images: {
      type: Array,
      default:[]
  }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Profile", ProfileSchema);