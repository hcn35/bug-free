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
  time_ended: {
    type: Date,
    // validate: function (val) {
    //   return val > this.createdAt;
    // },
  },
});

// DOCUMENT MIDDLEWARE
ticketSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
