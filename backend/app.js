const express = require("express");
const morgan = require("morgan");
const ticketRouter = require("./routes/ticket");
const userRouter = require("./routes/user");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/error");

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
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
