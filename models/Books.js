const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: String,
  title: String,
  authors: [String],
  cover: {
    type: String,
    default: "https://picsum.photos/200/300",
  },
  description: String,
  user_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Book", bookSchema);
