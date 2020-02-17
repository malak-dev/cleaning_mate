const router = require("express").Router();

// Get all appointment for selected provider
module.exports = db => {
  router.get("/:userId/appointments", (req, res) => {
    let userId = req.params.userId;
    console.log(userId);
    let query = {
      text: `SELECT a.date,a.start_time, b.first_name,  
      CASE
      WHEN date > now() THEN 'Upcoming'
      ELSE 'Completed' END AS Status, a.cost_per_hour, a.comment, a.rating
      FROM appointments as a
      JOIN clients as b on b.id = a.provider_id
      WHERE a.provider_id =$1 
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

  //Insert a new provider
  router.post("/", (req, res) => {
    const {
      email,
      password,
      first_name,
      last_name,
      number,
      address
    } = req.body;

    let query = {
      text:
        "INSERT INTO providers(email, password, first_name, last_name, phone_number, address) VALUES ($1 ,$2 ,$3 ,$4 ,$5, $6) RETURNING *;",
      values: [email, password, first_name, last_name, Number(number), address]
    };
    db.query(query).then(dbRes => res.send(201));
  });

  //Update existing provider
  router.put("/:userId", (req, res) => {
    const {
      email,
      password,
      first_name,
      last_name,
      number,
      address
    } = req.body;

    let query = {
      text: `UPDATE  providers SET email =$1 ,password=$2 ,first_name=$3 ,last_name=$4 ,phone_number=$5, address=$6  WHERE id=$7 ;`,
      values: [
        email,
        password,
        first_name,
        last_name,
        Number(number),
        address,
        userId
      ]
    };
    db.query(query).then(dbRes => res.send(201));
  });

  //Select a specific provider (login)

  return router;
};
