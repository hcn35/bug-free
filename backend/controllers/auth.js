const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(200).json({
    data: {
      user: newUser,
    },
  });
});
