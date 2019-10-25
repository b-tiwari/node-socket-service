// Require the serialport node module
const serialport = require("serialport");

export const readSerial = () => {
  const SerialPort = serialport.SerialPort; // Open the port
  const port = new SerialPort("/dev/ttyACM1", {
    baudrate: 9600,
    parser: serialport.parsers.readline("\n")
  }); // Read the port data

  port.on("open", function() {
    console.log("open");
    port.on("data", function(data) {
      console.log(data);
    });
  });
};
