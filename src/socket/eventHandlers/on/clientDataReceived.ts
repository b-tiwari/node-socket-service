import NexmoMsg from "../../../nextmoMsg/nexmoMsg";
import { sendText } from "../../../nextmoMsg/TwilloMsg";

const onClientDataReceived = socketService => {
  socketService.on("processClientData", reqData => {
    console.log(
      "socketService subscribed to processClientDatafadsf====",
      reqData
    );
    // NexmoMsg.sendSMS();
    sendText();
    socketService.emit("dataProcessedOnServer", {
      serverTime2: new Date(),
      data:
        "Hello React Sir! I am your socket server, I received your message and logged it. Is there anything eles I can help you with?"
    });
  });
};

export default onClientDataReceived;
