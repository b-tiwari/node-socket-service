const onClientDataReceived = socketService => {
  socketService.on("processClientData", data => {
    console.log("socketService subscribed to processClientData message ", data);
    socketService.emit("dataProcessedOnServer", {
      serverTime: new Date(),
      data
    });
  });
};

export default onClientDataReceived;
