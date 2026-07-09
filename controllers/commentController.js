// Import Models
const Comment = require("../models/Comment");
const Post = require("../models/Post");

// Add Comment
const addComment = async (req, res) => {
  try {
    const { comment } = req.body;

    // Check comment
    if (!comment) {
      return res.status(400).json({
        message: "Comment is required",
      });
    }

    // Check if post exists
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    // Create Comment
    const newComment = await Comment.create({
      comment,
      user: req.user._id,
      post: req.params.postId,
    });

    res.status(201).json({
      message: "Comment Added Successfully",
      newComment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Comments
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      post: req.params.postId,
    })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Export Controllers
module.exports = {
  addComment,
  getComments,
};