const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  link: { type: String },
  title: { type: String, require: true },
  img: { type: String },
});
module.exports = mongoose.model("service", serviceSchema);
