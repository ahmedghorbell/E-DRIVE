// Require json web token 
const jwt = require('jsonwebtoken')

const User = require("../models/user")

const isAdmin = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).send({ message: 'Unauthorized access' });
      }
  
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
      const userId = decodedToken.userId;
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(401).send({ message: 'Unauthorized access' });
      }
  
      if (!user.isAdmin) {
        return res.status(403).send({ message: 'Access denied' });
      }
      req.user = user;
      next();
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };
  

module.exports = isAdmin;
