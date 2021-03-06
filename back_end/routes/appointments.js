const router = require("express").Router();
require("dotenv").config();
const {
  twilioMessageProvider,
  twilioMessageClient
} = require("../send_sms.js");
const { mailGunMessage } = require("../send_email.js");

module.exports = db => {
  //upadate appointment with comment and rating

  // book an appointment
  router.put("/book/:providerId", (req, res) => {
    const providerId = req.params.providerId;
    const {
      selected_startTime,
      selected_hours,
      selectedDate,
      clientId,
      clientName
    } = req.body;

    let query = {
      text: `UPDATE appointments SET booked = true, client_id = $5  WHERE start_time >= $1 and start_time < ($1 + $2) and date = $3 and provider_id = $4 RETURNING *;`,
      values: [
        Number(selected_startTime),
        Number(selected_hours),
        selectedDate,
        providerId,
        clientId
      ]
    };
    db.query(query).then(dbRes => {
      console.log(dbRes.rows, "provider");
      mailGunMessage(
        clientName,
        selectedDate,
        selected_startTime,
        selected_hours,
        "afalconer@protonmail.com"
      );
      twilioMessageProvider(
        clientName,
        selectedDate,
        selected_startTime,
        selected_hours,
        "5148350149"
      );
      twilioMessageClient(
        selectedDate,
        selected_startTime,
        selected_hours,
        "5149190983"
      );

      res.json(dbRes.rows);
    });
  });

  // Update cost_hour of an appointment
  router.put("/:appointmentId/costPerHour", (req, res) => {
    const appointmentId = req.params.appointmentId;
    const { costPerHour } = req.body;

    let query = {
      text: `UPDATE appointments SET cost_per_hour = $1 WHERE id = $2 RETURNING *;`,
      values: [costPerHour, appointmentId]
    };
    db.query(query).then(dbRes => {
      console.log("update cost per hour", dbRes.rows);
      res.json(dbRes.rows);
    });
  });

  // delete an appointment -- you can only delete if appointment is not already booked
  router.delete("/:appointmentId", (req, res) => {
    const appointmentId = req.params.appointmentId;

    let query = {
      text: `DELETE FROM appointments WHERE id=$1 and booked=false ;`,
      values: [appointmentId]
    };
    db.query(query).then(dbRes => res.send(201));
  });

  // get all appointments ( for a specific day and between a start date and end date)

  // router.post("/", (req, res) => {
  //   const { selected_startTime, selected_hours, selectedDate } = req.body;
  //   console.log("i am body", req.body);
  //   const query = {
  //     text: `
  //     SELECT *
  //     FROM (
  //     SELECT provider_id,count(hours) as hours, avg(cost_per_hour)::numeric(10,2) as cost_per_hour
  //     FROM appointments
  //     WHERE booked = false and date = $3 and start_time >= $1 and start_time <= ($1 + $2)
  //     GROUP BY provider_id ) as view1
  //     JOIN providers as b on view1.provider_id = b.id
  //     JOIN (
  //       SELECT provider_id, avg(rating)::numeric(10,2) as rating
  //       FROM appointments
  //       WHERE date <= now() - interval '1 day'
  //       GROUP by provider_id) as view2 on  view1.provider_id = view2.provider_id
  //     WHERE view1.hours >= $2;`,
  //     values: [selected_startTime, selected_hours, selectedDate]
  //   };
  //   db.query(query)
  //     .then(resDb => {
  //       res.json(resDb.rows);
  //     })
  //     .catch(err => console.error("query error", err.stack));
  // });
  router.post("/day", (req, res) => {
    const { date } = req.body;
    console.log(req.body);
    const query = {
      text: `
      SELECT view1.provider_id as provider_id, first_name, hours, cost_per_hour, lat, lon, view2.rating
      FROM (
        SELECT a.provider_id as provider_id, b.first_name, count(hours) as hours, avg(cost_per_hour)::numeric(10,2) as cost_per_hour, lat ,lon 
            FROM appointments as a
        JOIN providers as b on a.provider_id = b.id
        WHERE booked = false and date = $1
         GROUP BY a.provider_id,b.first_name, lat,lon
          ) as view1
            LEFT JOIN
          (
         SELECT provider_id, avg(rating)::numeric(10,2) as rating
        FROM appointments
        WHERE date <= now() - interval '1 day'
         GROUP by provider_id) as view2 on  view1.provider_id = view2.provider_id
        `,
      values: [date]
    };
    db.query(query)
      .then(resDb => {
        res.json(resDb.rows);
        console.log(resDb.rows);
      })
      .catch(err => console.error("query error", err.stack));
  });

  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const { rating, comment } = req.body;
    console.log("hhhhhhhhhhhhh", rating, comment, id);

    let query = {
      text: `UPDATE appointments SET rating=$1 , comment=$2  WHERE id=$3 RETURNING * ;`,
      values: [rating, comment, id]
    };
    db.query(query)
      .then(dbRes => {
        console.log(dbRes.rows);
        res.json(dbRes.rows);
      })
      .catch(err => console.error("query error", err.stack));
  });

  router.post("/", (req, res) => {
    const { selected_startTime, selected_hours, selectedDate } = req.body;
    console.log("i am body", req.body);
    const query = {
      text: `
        SELECT view1.provider_id as provider_id, first_name, hours, cost_per_hour, lat, lon, view2.rating
      FROM (
        SELECT a.provider_id as provider_id, b.first_name, count(hours) as hours, avg(cost_per_hour)::numeric(10,2) as cost_per_hour, lat ,lon 
            FROM appointments as a
        JOIN providers as b on a.provider_id = b.id
        WHERE booked = false and date = $3 and start_time >= $1 and start_time < ($1+$2)
         GROUP BY a.provider_id,b.first_name, lat,lon
          ) as view1
            LEFT JOIN
          (
         SELECT provider_id, avg(rating)::numeric(10,2) as rating
        FROM appointments
        WHERE date <= now() - interval '1 day'
         GROUP by provider_id) as view2 on  view1.provider_id = view2.provider_id
        WHERE view1.hours >= $2;`,

      values: [Number(selected_startTime), Number(selected_hours), selectedDate]
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows);
        res.json(resDb.rows);
      })
      .catch(err => console.error("query error", err.stack));
  });
  return router;
};
