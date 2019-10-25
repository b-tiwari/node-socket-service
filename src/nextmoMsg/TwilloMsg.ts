/**
 * Typescript
 * Twilio version: ^3.15.0
 */

// import * as Twilio from "twilio";

// getting ready
const twilioNumber = "12192494832";
const accountSid = "AC720827e0bc8071de6c5c42a3072a46ff";
const authToken = "a918eb737b397bcc56870f7f7aa25bb1";

// const client = new Twilio("AC720827e0bc8071de6c5c42a3072a46ff", authToken);
const client = require("twilio")(accountSid, authToken);

// start sending message

export const sendText = () => {
  const phoneNumbers = ["15107174604"];

  phoneNumbers.map(phoneNumber => {
    console.log(phoneNumber);

    if (!validE164(phoneNumber)) {
      throw new Error("number must be E164 format!");
    }

    const textContent = {
      body:
        "Helllooooo, teri car ka vandalism ho raha hai bhai...ja ke check kar jaldi...",
      to: phoneNumber,
      from: twilioNumber
    };

    client.messages
      .create(textContent)
      .then(message => console.log(message.to))
      .catch(err => console.log("error=", err));
  });
};

// Validate E164 format
function validE164(num) {
  return /^\+?[1-9]\d{1,14}$/.test(num);
}
