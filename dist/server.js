"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const socket_1 = require("./socket/socket");
const app = express();
app.set("port", process.env.PORT || 6565);
var http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http);
app.get("/", (req, res) => {
    res.send("hello world.......");
});
// configure Socket services
socket_1.default(io);
// start our simple server up on localhost:3000
const server = http.listen(6565, function () {
    console.log("Hi there!!!, I'm your server, send me requests at http://localhoast:6565");
});
// //
// const port = 6565;
// io.listen(port);
// console.log("listening on port ", port);
//# sourceMappingURL=server.js.map