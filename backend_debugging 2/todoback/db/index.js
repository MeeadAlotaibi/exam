const mongoose = require("mongoose");
const dotenv = require("dotenv");
const DB = process.env.DB_URL;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(DB, options)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connected");
  });
