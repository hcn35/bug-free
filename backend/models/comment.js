const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Please provide your comment!"],
  },
  contentChangedAt: {
    type: Date,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
