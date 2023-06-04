// Require schema person
const User = require("../models/user");

// Require bcrypt
const bcrypt = require("bcrypt");

// Require json web token
const jwt = require("jsonwebtoken")

// Register
exports.signup = async (req, res) => {
  try {
      const { image, name, email, password, phone, isAdmin, superAdmin } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          res.status(400).send({ error: "Email already in use" });
          return;
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({ image, name, email, password: hashedPassword, phone, isAdmin, superAdmin });
      await newUser.save();
      const token = jwt.sign({
          id: newUser._id,
      }, process.env.SECRET_KEY);
      res.status(200).send({ message: "User created successfully", newUser, token });
  } catch (error) {
      res.status(400).send({ error: "Error registering user" });
  }
};


// Login 
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({ email });
      
      if (!foundUser) {
        return res.status(400).send({ error: 'User not found' });
      }
      
      const isPasswordValid = await bcrypt.compare(password, foundUser.password);
      
      if (!isPasswordValid) {
        return res.status(400).send({ error: 'Invalid password' });
      }
      
      const token = jwt.sign({
        id: foundUser._id
      }, process.env.SECRET_KEY)
      res.status(200).send({message: "Login successfully",foundUser, token });
    } catch (error) {
      res.status(400).send({ error: 'Server error' });
    }
  };

  
  
  // GetUsers
exports.getAll = async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).send({ success: true, users }); 
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
}

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    await User.findByIdAndDelete(_id);
    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: "Error deleting user", error });
  }
};

// Get user by id 
exports.getUserById = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);

    if (!user) {
      return res.status(400).send({ error: "User not found" });
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: "Error retrieving user by id", message: error.message });
  }
};

// Update Users
exports.updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const newUser = req.body;
    await User.updateOne({ _id }, { $set: newUser });
    res.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    res.status(400).send({ error: "Error updating user", error });
  }
};