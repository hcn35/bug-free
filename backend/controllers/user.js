const catchAsync = require("../utils/catchAsync");
const User = require("../models/user");
const AppError = require("../utils/appError");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

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

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1. Create error if user POST password data
  if (req.body.password || req.body.passwordConfirmed)
    return next(new AppError("This route is not for password updates.", 400));

  // 2. Update user document
  const filteredBody = filterObj(req.body, "name", "email");
  const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 200,
    message: "Success",
    data: updatedUser,
  });
});

exports.createUser = (req, res) => {
  res.status(200).json({
    status: 200,
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
