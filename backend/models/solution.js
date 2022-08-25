const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a solution name!"],
  },
  description: {
    type: String,
  },
});

const Solution = mongoose.model("Solution", solutionSchema);

module.exports = Solution;
