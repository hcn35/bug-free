const catchAsync = require("../utils/catchAsync");
const User = require("../models/user");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  // EXECUTE QUERY
  const users = await User.find();

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 500,
    message: "This route is not defined yet!",
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 500,
    message: "This route is not defined yet!",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 500,
    message: "This route is not defined yet!",
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 500,
    message: "This route is not defined yet!",
  });
};
