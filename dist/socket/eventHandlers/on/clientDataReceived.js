"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onClientDataReceived = socketService => {
    socketService.on("processClientData", reqData => {
        console.log("socketService subscribed to processClientDatafadsf====", reqData);
        socketService.emit("dataProcessedOnServer", {
            serverTime2: new Date(),
            data: 'Hey there! I am your server, How may I help you.',
        });
    });
};
exports.default = onClientDataReceived;
//# sourceMappingURL=clientDataReceived.js.map