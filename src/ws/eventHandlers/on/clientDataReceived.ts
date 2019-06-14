const onClientDataReceived = ws => {
  ws.on("processClientData", (data: any) => {
    //log the received message
    console.log(
      "websocket service subscribed to processClientData message received: ",
      data
    );
    ws.send("dataProcessedOnServer", {
      serverTime: new Date(),
      data
    });
  });
};

export default onClientDataReceived;
