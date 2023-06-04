// Require express
const express = require("express");

// Create instance
const app = express();
const cors = require("cors")
// Middleware body parser
app.use(express.json());

// Require dotenv
require("dotenv").config();

// Connection to DataBase
const connect = require("./config/connectDB");
connect();

// Create PORT
const PORT = process.env.PORT;

// Listen to the PORT
app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
});

// Require routes 
app.use(cors());
app.use("/api/products", require("./routes/productRoute"))
app.use("/api/users", require("./routes/userRoute"))
app.use("*", (req, res) => {
  res.send("404 - PAGE NOT FOUND");
});