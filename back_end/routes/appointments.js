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
  router.post("/", (req, res) => {
    const { selected_startTime, selected_hours, selectedDate } = req.body;
    console.log("i am body", req.body)
    const query = {
      text: `
      SELECT b.first_name, b.last_name, view2.rating, view1.cost_per_hour
      FROM (
      SELECT provider_id,count(hours) as hours, avg(cost_per_hour)::numeric(10,2) as cost_per_hour
      FROM appointments
      WHERE booked = false and date = $3 and start_time >= $1 and start_time <= ($1 + $2)
      GROUP BY provider_id ) as view1
      JOIN providers as b on view1.provider_id = b.id
      JOIN (
        SELECT provider_id, avg(rating)::numeric(10,2) as rating
        FROM appointments
        WHERE date <= now() - interval '1 day'
        GROUP by provider_id) as view2 on  view1.provider_id = view2.provider_id
      WHERE view1.hours >= $2;`,
      values: [selected_startTime, selected_hours, selectedDate]
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows, "request");
        res.json(resDb.rows);
      })
      .catch(err => console.error("query error", err.stack));
  });
  return router;
};
