//Define the function to send a confirmation text when an appointment is booked

require("dotenv").config();
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require("twilio")(accountSid, authToken);

const twilioMessage = function (clientName, date, time, hours, phoneNumber) {
  client.messages
    .create({
      body: `A new appointment was booked with ${clientName} on ${date} at ${time} for ${hours} hours `,
      from: "+12019866954",
      to: `+15149190983`
    })
    .then(message => console.log(message.sid));
};

module.exports = { twilioMessage };
