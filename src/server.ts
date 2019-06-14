import * as express from "express";
import * as http from "http";
import * as WebSocket from "ws";
import configWebSocket from "./ws/ws";

const app = express();
const port = process.env.PORT || 6565;
app.set("port", port);

//initialize a simple http server
const httpServer = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server: httpServer });

configWebSocket(wss);

//start our server
httpServer.listen(port, () => {
  console.log(`Server started at ${httpServer.address()}:${port}`);
});
