// Import Express
const express = require("express");

const router = express.Router();


// Import Controller
const {
  addComment,
  getComments,
} = require("../controllers/commentController");

// Import Middleware
const { protect } = require("../middleware/authMiddleware");

// Routes

// Get Comments of a Blog
router.get("/:postId", getComments);

// Add Comment to a Blog
router.post("/:postId", protect, addComment);

// Export Router
module.exports = router;