const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

mongoose
  .connect(
    "mongodb+srv://alvin:mX112qDtkynye5OZ@cluster0.iugyx.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB Atlas connected succesfully");
  })
  .catch((error) => {
    console.log("Error connecting to mongodb atlas");
    console.log(error);
  });

app.use(bodyParser.json());
app.use("/api/product", productRoutes);

module.exports = app;
