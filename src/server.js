
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/user.routes")

const server = express();

// Setting
server.set("port", process.env.PORT || 3000);

//Middlewares
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

//Routes
server.use("/api/users",routes);

module.exports = server;