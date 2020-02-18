const router = require("express").Router();

module.exports = db => {
  // Get all appointment for selected provider
  router.get("/:userId/appointments", (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const query = {
      text: `SELECT a.date,a.start_time, b.first_name,  
      CASE
      WHEN date > now() THEN 'Upcoming'
      ELSE 'Completed' END AS Status, a.cost_per_hour, a.comment, a.rating, a.id
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

  // Insert New appointments for a specific provider
  router.post("/:userId/appointments", (req, res) => {
    const userId = req.params.userId;
    const { date, start_time, hours, cost_per_hour } = req.body;

    const query = {
      text:
        "INSERT INTO appointments (date, start_time, hours, cost_per_hour, provider_id) VALUES ($1 ,$2 ,$3 ,$4 ,$5) RETURNING *;",
      values: [
        date,
        Number(start_time),
        Number(hours),
        Number(cost_per_hour),
        Number(userId)
      ]
    };
    db.query(query).then(dbRes => res.send(201));
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
    const userId = req.params.userId;
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
  router.post("/login", (req, res) => {
    const { email, password } = req.body;


    const query = {
      text:
        "SELECT * FROM providers WHERE email =$1 and password=$2;",
      values: [email, password]
    };
    db.query(query).then(resDb => {
      console.log(resDb.rows[0].email);
      console.log(resDb.rows[0].password);

      if (email !== resDb.rows[0].email) {
        res.send("Email not in DataBase");
      } else if (password !== resDb.rows[0].password) {
        res.send("Wrong Password");
      } else {
        res.json(resDb.rows);
      }
    });
  });

  return router;
};
