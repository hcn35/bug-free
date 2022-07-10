const express = require("express");
const authController = require("../controllers/auth");
const ticketController = require("../controllers/ticket");

const router = express.Router();

router.route("/ticket-stats").get(ticketController.getTicketStats);

router
  .route("/")
  .get(authController.protect, ticketController.getAllTickets)
  .post(ticketController.createTicket);

router
  .route("/:id")
  .get(ticketController.getTicket)
  .patch(ticketController.updateTicket)
  .delete(
    authController.protect,
    authController.restrictTo("admin", "manager"),
    ticketController.deleteTicket
  );

module.exports = router;
