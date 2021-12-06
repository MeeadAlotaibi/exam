const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan"); 
const mongoose = require("mongoose");

const todoRouter = require("./routers/routes/todos");
require("../todoback/db");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
dotenv.config();
app.use(todoRouter);

const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
