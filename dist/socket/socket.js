"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientDataReceived_1 = require("./eventHandlers/on/clientDataReceived");
const configSocket = io => {
    // whenever a user connects on port 3000 via
    // a websocket, log that a user has connected
    io.on("connection", function (socket) {
        console.log("a user connected");
        clientDataReceived_1.default(socket);
    });
};
exports.default = configSocket;
//# sourceMappingURL=socket.js.map