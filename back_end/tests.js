// code to run the Twilio and Mailgun function as a test, this page can be deleted
require("dotenv").config();
const { twilioMessage } = require("./send_sms.js");
const { mailGunMessage } = require("./send_email.js");

const clientName = "Alex";
const date = "March 01, 2020";
const time = "13:00";
const hours = 4;
const phoneNumber = process.env.phoneNumber;
const email = process.env.email;

//twilioMessage(clientName, date, time, hours, phoneNumber);
mailGunMessage(clientName, date, time, hours, email);
