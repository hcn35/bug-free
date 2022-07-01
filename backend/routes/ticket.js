const express = require("express");

const ticketController = require("../controllers/ticket");

const router = express.Router();

router.route("/ticket-stats").get(ticketController.getTicketStats);

router
  .route("/")
  .get(ticketController.getAllTickets)
  .post(ticketController.createTicket);

router
  .route("/:id")
  .get(ticketController.getTicket)
  .patch(ticketController.updateTicket)
  .delete(ticketController.deleteTicket);

module.exports = router;
