import * as express from "express";
import * as http from "http";
import * as socketio from "socket.io";
import * as path from "path";
import configSocket from "./socket/socket";

const app = express();
const port = process.env.PORT || 6565;
app.set("port", port);

var httpServer = (http as any).Server(app);
// set up socket.io and bind it to our
// http server.
let io = socketio(httpServer);

app.get("/", (req: any, res: any) => {
  res.send("hello world.......");
});

// configure Socket services
configSocket(io);

// start our simple server up on localhost:3000
const server = httpServer.listen(port, () => {
  console.log(`Server started at ${httpServer.address()}:${port}`);
});
