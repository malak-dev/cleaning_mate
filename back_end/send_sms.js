//Define the function to send a confirmation text when an appointment is booked

require("dotenv").config();
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require("twilio")(accountSid, authToken);

const twilioMessageProvider = function(
  clientName,
  date,
  time,
  hours,
  phoneNumber
) {
  client.messages
    .create({
      body: `A new appointment was booked with ${clientName} on ${date} at ${time} for ${hours} hours `,
      from: "+12019866954",
      to: `+1${phoneNumber}`
    })
    .then(message => console.log(message.sid));
};

const twilioMessageClient = function(date, time, hours, phoneNumber) {
  client.messages
    .create({
      body: `Your Clean Mate appointment is confirmed on ${date} at ${time} for ${hours} hours `,
      from: "+12019866954",
      to: `+1${phoneNumber}`
    })
    .then(message => console.log(message.sid));
};

module.exports = { twilioMessageProvider, twilioMessageClient };
