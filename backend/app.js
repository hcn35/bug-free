const express = require("express");
const morgan = require("morgan");
const ticketRouter = require("./routes/ticket");
const userRouter = require("./routes/user");

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded());

// ROUTES
app.use("/api/v1/tickets", ticketRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
