const express = require("express");
const morgan = require("morgan");
const ticketRouter = require("./routes/ticket");
const userRouter = require("./routes/user");

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  console.log("you are in dev");
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  console.log("Hello from Middleware");
  next();
});

app.use(express.json());
app.use(express.urlencoded());

// ROUTES
app.use("/api/v1/tickets", ticketRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
