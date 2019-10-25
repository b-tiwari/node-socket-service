"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TwilloMsg_1 = require("../../../nextmoMsg/TwilloMsg");
const onClientDataReceived = socketService => {
    socketService.on("processClientData", reqData => {
        console.log("socketService subscribed to processClientDatafadsf====", reqData);
        // NexmoMsg.sendSMS();
        TwilloMsg_1.sendText();
        socketService.emit("dataProcessedOnServer", {
            serverTime2: new Date(),
            data: "Hello React Sir! I am your socket server, I received your message and logged it. Is there anything eles I can help you with?"
        });
    });
};
exports.default = onClientDataReceived;
//# sourceMappingURL=clientDataReceived.js.map