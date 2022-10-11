
const server = require("./server");
const {mongoose} = require("./database");

server.listen(server.get("port"));
console.log("Server on port", server.get("port"));