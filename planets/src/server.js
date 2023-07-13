const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/planets", routes);

server.use("*", (req, res) => {
  res.status(401).send("Not found");
});

server.use((err, req, res, next) => {
  res.status(500).json({
    error: true,
    message: err.message,
  });
});

module.exports = server;
