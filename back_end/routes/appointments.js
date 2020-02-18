const router = require("express").Router();

module.exports = db => {
  // Update an appointment (book , cost_hour, rating, comment)
  router.put("/:appointmentId", (req, res) => {
    const appointmentId = req.params.appointmentId;
    const { booked, cost_per_hour, rating, comment } = req.body;

    let query = {
      text: `UPDATE appointments SET booked =$1 ,cost_per_hour=$2 , rating=$3 ,comment=$4  WHERE id=$5 ;`,
      values: [booked, cost_per_hour, rating, comment, appointmentId]
    };
    db.query(query).then(dbRes => res.send(201));
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
  router.get("/", (req, res) => {
    const { date } = req.body;
    const query = {
      text: `
      SELECT *
      FROM appointments as a
      JOIN (SELECT provider_id, avg(rating)::numeric(10,2) 
        FROM appointments 
        WHERE date <= now() - interval '1 day' 
        GROUP by provider_id) as b on  a.provider_id = b.provider_id 
      WHERE a.booked = false and a.date = $1  `,
      values: [date]
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
