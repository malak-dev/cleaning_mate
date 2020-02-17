require("dotenv").config();
const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN;
const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

const mailGunMessage = function(clientName, date, time, hours, email) {
  const data = {
    from: "Clean Mate <me@samples.mailgun.org>",
    to: `${email}`,
    subject: "Cleant Mate - New Appointment Booked",
    text: `A new appointment was booked with ${clientName} on ${date} at ${time} for ${hours} hours`
  };

  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
};

module.exports = { mailGunMessage };
