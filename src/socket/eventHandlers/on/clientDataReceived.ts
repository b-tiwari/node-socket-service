const onClientDataReceived = socketService => {
  socketService.on("processClientData", reqData => {
    console.log("socketService subscribed to processClientDatafadsf====", reqData);
    socketService.emit("dataProcessedOnServer", {
      serverTime2: new Date(),
      data: 'Hey there! I am your server, How may I help you.',
    });
  });
};

export default onClientDataReceived;
