import onClientDataReceived from "./eventHandlers/on/clientDataReceived";
import * as WebSocket from "ws";

const configWebSocket = wss => {
  console.log("configuring web sockets");
  // whenever a user connects on port  via
  // a websocket, log that a user has connected
  wss.on("connection", (ws: WebSocket) => {
    console.log("a client connected");
    onClientDataReceived(ws);
  });
};

export default configWebSocket;
