const mongoose = require("mongoose");
const slugify = require("slugify");

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A ticket must have a name"],
    unique: true,
  },
  slug: String,
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
  endedAt: {
    type: Date,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },
  status: {
    type: String,
    enum: ["TODO", "IN PROGRESS", "QUALITY ASSURANCE", "DONE"],
    default: "TODO",
  },
});

// DOCUMENT MIDDLEWARE
ticketSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
