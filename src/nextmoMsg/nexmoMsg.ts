// import Nexmo from "nexmo";
const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: "b704731d",
  apiSecret: "sTm75bbx1ZCzStGM"
});

export class NexmoMsg {
  static message = {
    content: {
      type: "text",
      text:
        "Helllooooo, teri car ka vandalism ho raha hai bhai...ja ke check kar jaldi..."
    }
  };

  static sendSMS = () => {
    // nexmo.channel.send(
    //   { type: "sms", number: "17323067597" },
    //   NexmoMsg.message,
    //   (err, data) => {
    //     console.log(data.message_uuid);
    //   }
    // );

    const from = "18582862275";
    const to = "15107174604";

    const text =
      "Helllooooo, teri car ka vandalism ho raha hai bhai...ja ke check kar jaldi...";

    nexmo.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          console.log("Message sent successfully.");
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`
          );
        }
      }
    });
  };

  static sendWhatsapp = () => {
    nexmo.channel.send(
      { type: "whatsapp", number: "17323067597" },
      NexmoMsg.message,
      (err, data) => {
        console.log(data.message_uuid);
      }
    );
  };
}

export default NexmoMsg;
