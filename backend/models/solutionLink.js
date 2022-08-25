const mongoose = require("mongoose");

const solutionLinkSchema = new mongoose.Schema({
  url: {
    type: String,
  },
});

const SolutionLink = mongoose.model("SolutionLink", solutionLinkSchema);

module.exports = SolutionLink;
