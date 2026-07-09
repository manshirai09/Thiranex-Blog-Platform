// Import Express
const express = require("express");

const router = express.Router();

// Import Controller
const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

// Import Authentication Middleware
const { protect } = require("../middleware/authMiddleware");


// Public Routes


// Get All Posts
router.get("/", getAllPosts);

// Get Single Post
router.get("/:id", getSinglePost);



// Protected Routes



// Create New Post
router.post("/", protect, createPost);

// Update Existing Post
router.put("/:id", protect, updatePost);

// Delete Post
router.delete("/:id", protect, deletePost);

// Export Router
module.exports = router;