"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onClientDataReceived = socketService => {
    socketService.on("processClientData", data => {
        console.log("socketService subscribed to processClientData message ", data);
        socketService.emit("dataProcessedOnServer", {
            serverTime: new Date(),
            data
        });
    });
};
exports.default = onClientDataReceived;
//# sourceMappingURL=clientDataReceived.js.map