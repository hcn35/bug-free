const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception! Shutting down ...");
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("Successfully connect to the database"));

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("App is running...");
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection! Shutting down ...");
  server.close(() => {
    process.exit(1);
  });
});
