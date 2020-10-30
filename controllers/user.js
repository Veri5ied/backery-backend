const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.SignIn = (req, res, next) => {};

exports.SignUp = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
        userName: req.body.userName,
        firstName: req.body.firstName,
        location: req.body.location,
      });
      user
        .save()
        .then(() => {
          res.status(201).json({
            message: "User created successfully",
          });
        })
        .catch((error) => {
          res.status(501).json({
            error: error,
          });
        });
    })
    .catch((error) => {
      error: error;
    });
};
