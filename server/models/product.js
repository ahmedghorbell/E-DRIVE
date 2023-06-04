// Require mongoose
const mongoose = require("mongoose");

// Create Schema
const productSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["trucks", "cars", "motorcycles", "scooters", "bicycles"],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  energy: {
    type: String,
    enum: ["ELECTRIC", "HYBRID"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  username:{
    type: String,
    required: true,
  }, 
  createdBy: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
  },
  doors: {
    type: String,
  },
  power: {
    type: String,
  },
  batterylife: {
    type: String,
  },
  numberofreports: {
    type: String,
  },
  topspeed: {
    type: String,
  },
    createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export
module.exports = Connect = mongoose.model("product", productSchema);
