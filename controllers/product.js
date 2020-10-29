const Product = require("../models/product");

exports.createProduct = (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    imageURL: req.body.imageURL,
    price: req.body.price,
  });
  product
    .save()
    .then(() => {
      res.status(201).json({
        message: "Item successfully created",
      });
    })
    .catch((error) => {
      res.status(501).json({
        error: error,
      });
    });
};

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Product successfully deleted",
      });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.updateProduct = (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    imageURL: req.body.imageURL,
    price: req.body.price,
  });
  Product.updateOne({ _id: req.params.id, product })
    .then(() => {
      res.status(200).json({
        message: "Product updated successfully",
      });
    })
    .catch((error) => {
      res.status(401).json({
        error: error,
      });
    });
};

exports.findProducts = (req, res, next) => {
  Product.find()
    .then(() => {
      res.status(200).json({
        message: "All products found",
      });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.findAProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Product exists",
      });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
