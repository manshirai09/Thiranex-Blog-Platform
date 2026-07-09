// Import Mongoose
const mongoose = require("mongoose");

// Create Post Schema
const postSchema = new mongoose.Schema(
  {
    // Blog Title
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Blog Content
    content: {
      type: String,
      required: true,
    },

    // Author of the Blog
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


// Export Post Model
module.exports = mongoose.model("Post", postSchema);