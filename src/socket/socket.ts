import onClientDataReceived from "./eventHandlers/on/clientDataReceived";

const configSocket = io => {
  // whenever a user connects on port 3000 via
  // a websocket, log that a user has connected
  io.on("connection", function(socket: any) {
    console.log("a user connected");
    onClientDataReceived(socket);
  });
  io.on("disconnect", () => console.log("Client disconnected"));
};

export default configSocket;
