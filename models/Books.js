const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: String,
  title: String,
  author: String,
  cover: {
    type: String,
    default: "https://picsum.photos/200/300",
  },
});

module.exports = mongoose.model("Book", bookSchema);
