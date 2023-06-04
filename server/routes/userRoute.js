// Require express
const express = require("express");
const { signup, login, getAll, deleteUser, updateUser, getUserById, setAdmin } = require("../controllers/user");
const { signupvalidation, validator } = require("../middleware/validator");
const isAuth = require("../middleware/isAuth");

// Require router from express
const router = express.Router();

// Create route
// Register
router.post("/signup", signupvalidation(), validator, signup);

// Login
router.post("/login", login);

// Current
router.get("/current", isAuth ,(req, res) => {
  res.send(req.user);
});

// GetUsers
router.get("/all_users", getAll);

// Get product by id
router.get("/get_user/:_id", getUserById)

// Delete User
router.delete("/delete_user/:_id", deleteUser)

// Update User
router.put("/update_user/:_id", signupvalidation(), validator, updateUser)

// Export routes
module.exports = router;
