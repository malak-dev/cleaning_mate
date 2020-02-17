const router = require("express").Router();

// Get all appointment for selected user
module.exports = db => {
  router.get("/:userId/appointments", (req, res) => {
    let userId = 2; //req.params.userId;
    console.log(userId);
    let query = {
      text: `SELECT a.date,a.start_time, b.first_name,  
      CASE
      WHEN date > now() THEN 'Upcoming'
      ELSE 'Completed' END AS Status, a.cost_per_hour, a.comment, a.rating
      FROM appointments as a
      JOIN providers as b on b.id = a.client_id
      WHERE a.client_id =$1 
      ORDER BY date desc, start_time desc;`,
      values: [userId]
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
