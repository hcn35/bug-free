const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A ticket must have a name"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "A ticket must have a description"],
  },
  timeEstimated: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  time_ended: {
    type: Date,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
