import * as express from "express";
import * as socketio from "socket.io";
import * as path from "path";
import configSocket from "./socket/socket";

const app = express();
app.set("port", process.env.PORT || 6565);

var http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http);

app.get("/", (req: any, res: any) => {
  res.send("hello world.......");
});

// configure Socket services
configSocket(io);

// start our simple server up on localhost:3000
const server = http.listen(6565, function() {
  console.log(
    "Hi there!!!, I'm your server, send me requests at http://localhoast:6565"
  );
});

// //
// const port = 6565;
// io.listen(port);
// console.log("listening on port ", port);
