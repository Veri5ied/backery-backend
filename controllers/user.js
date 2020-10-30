const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
      res.status(500).json({
        error: error,
      });
    });
};

exports.SignIn = (req, res, next) => {
  User.findOne({ email: req.body.email } || { userName: req.body.userName })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "User not found",
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              message: "Incorrect password",
            });
          }
          const token = jwt.sign({ userId: user._id }, "jw9w8ehndo3w", {
            expiresIn: "24h",
          });
          res.status(200).json({
            userId: user._id,
            token: token,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};
