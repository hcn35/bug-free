const Ticket = require("../models/ticket");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createTicket = catchAsync(async (req, res, next) => {
  const newTicket = await Ticket.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      ticket: newTicket,
    },
  });
});

exports.getAllTickets = catchAsync(async (req, res, next) => {
  // EXECUTE QUERY
  const features = new APIFeatures(Ticket.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const tickets = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    data: {
      tickets: tickets,
    },
  });
});

exports.getTicket = catchAsync(async (req, res, next) => {
  const ticket = await Ticket.find({ _id: req.params.id });
  if (!ticket.length) {
    return next(new AppError("No ticket found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      ticket: ticket,
    },
  });
});

exports.updateTicket = catchAsync(async (req, res, next) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!ticket) {
    return next(new AppError("No ticket found with that ID", 404));
  }

  res.status(200).json({
    status: "status",
    data: {
      ticket,
    },
  });
});

exports.deleteTicket = catchAsync(async (req, res, next) => {
  const ticket = await Ticket.findByIdAndDelete(req.params.id);

  if (!ticket) {
    return next(new AppError("No ticket found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: null,
  });
});

exports.getTicketStats = catchAsync(async (req, res, next) => {
  const stats = await Ticket.aggregate([
    {
      $group: {
        _id: null,
        numTickets: { $sum: 1 },
        avgTimeEstimated: { $avg: "$timeEstimated" },
        minTimeEstimated: { $min: "$timeEstimated" },
        maxTimeEstimated: { $max: "$timeEstimated" },
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    data: { stats },
  });
});
