const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogpostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  published: { type: Boolean, default: false },
  user_id: { type: String, required: true },
});

module.exports = mongoose.model("blogpost", blogpostSchema);
