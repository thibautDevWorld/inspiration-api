const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  imdbID: String,
  cover: {
    type: String,
    default: "https://picsum.photos/200/300",
  },
  year: String,
  type: String,
});

module.exports = mongoose.model("Movie", movieSchema);
