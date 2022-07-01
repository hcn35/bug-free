const Ticket = require("../models/ticket");
const APIFeatures = require("../utils/apiFeatures");

exports.createTicket = async (req, res) => {
  try {
    const newTicket = await Ticket.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        ticket: newTicket,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};

exports.getAllTickets = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Unsuccessfully fetch data!",
    });
  }
};

exports.getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.find({ _id: req.params.id });

    res.status(200).json({
      status: "success",
      data: {
        ticket: ticket,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Unsuccessfully fetch data!",
    });
  }
};

exports.updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "status",
      data: {
        ticket,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Unsuccessfully fetch data!",
    });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getTicketStats = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
