const router = require("express").Router();

// Get all appointment for selected user

module.exports = db => {
  router.get("/api/clients/:userId/appointments", (req, res) => {
    let userId = 2; //req.params.userId;
    console.log(userId);
    let query = {
      text: `SELECT * FROM appointments where client_id =$1 order by date desc;`,
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
