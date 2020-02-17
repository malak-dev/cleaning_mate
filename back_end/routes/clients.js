const router = require("express").Router();

// Get all appointment for selected client
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

  //Insert a new client
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
        "INSERT INTO clients(email, password, first_name, last_name, phone_number, address) VALUES ($1 ,$2 ,$3 ,$4 ,$5, $6) RETURNING *;",
      values: [email, password, first_name, last_name, Number(number), address]
    };
    db.query(query).then(dbRes => res.send(201));
  });

  //Update existing client
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
      text: `UPDATE  clients SET email =$1 ,password=$2 ,first_name=$3 ,last_name=$4 ,phone_number=$5, address=$6  WHERE id=$7 ;`,
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

  //Select a specific client (login)

  return router;
};
