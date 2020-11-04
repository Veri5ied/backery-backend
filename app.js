const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const app = express();

dotenv.config();

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
     `mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.iugyx.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("MongoDB Atlas connected succesfully");
  })
  .catch((error) => {
    console.log("Error connecting to mongodb atlas");
    console.log(error);
  });

app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/product", productRoutes);

module.exports = app;
