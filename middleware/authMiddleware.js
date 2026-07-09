// Import Required Packages
const jwt = require("jsonwebtoken");


// Import User Model
const User = require("../models/User");


// Authentication Middleware

const protect = async (req, res, next) => {
  try {
    let token;

    // Check if Authorization header exists
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Extract token from "Bearer <token>"
      token = req.headers.authorization.split(" ")[1];

      // Verify JWT Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user by ID (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      // Continue to next middleware/controller
      next();
    } else {
      return res.status(401).json({
        message: "Not Authorized. Token Missing.",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};


// Export Middleware
module.exports = { protect };