const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  imageURL: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = model.Schema("product", productSchema);
