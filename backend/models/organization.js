const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide an organization name!"],
  },
  description: {
    type: String,
  },
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
