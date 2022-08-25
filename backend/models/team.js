const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a team name!"],
  },
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
