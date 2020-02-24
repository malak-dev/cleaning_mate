const router = require("express").Router();

module.exports = db => {
  // Get all appointment for selected client
  router.get("/:userId/appointments", (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const query = {
      text: `SELECT a.date,a.start_time, b.first_name,  
      CASE
      WHEN date > now() THEN 'Upcoming'
      ELSE 'Completed' END AS Status, a.cost_per_hour, a.comment, a.rating, a.id
      FROM appointments as a
      LEFT JOIN providers as b on b.id = a.provider_id
      WHERE a.client_id = $1 
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
      phone_number,
      address,
      lat,
      lon
    } = req.body;
    console.log(phone_number, "i am number");
    const query = {
      text:
        "INSERT INTO clients(email, password, first_name, last_name, phone_number, address,lat,lon) VALUES ($1 ,$2 ,$3 ,$4 ,$5, $6,$7,$8) RETURNING *;",
      values: [
        email,
        password,
        first_name,
        last_name,
        phone_number,
        address,
        lat,
        lon
      ]
    };
    db.query(query)
      .then(dbRes => res.send(201))
      .catch(err => console.log(err));
  });

  //Update existing client
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

    const query = {
      text: `UPDATE  clients SET email =$1 ,password=$2 ,first_name=$3 ,last_name=$4 ,phone_number=$5, address=$6  WHERE id=$7 returning * ;`,
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
    db.query(query)
      .then(dbRes => console.log(dbRes))
      .then(resDb => {
        return res.json(resDb.rows[0]);
      })
      .catch(err => console.log(err));
    //then(dbRes => res.send(201));
  });

  //Select a specific client (login)
  router.post("/login", (req, res) => {
    const { email, password } = req.body;

    console.log("hello", email, password);
    const query = {
      text: "SELECT * FROM clients WHERE email = $1 and password = $2;",
      values: [email, password]
    };
    db.query(query)
      .then(resDb => {
        console.log("then");

        if (!resDb.rowCount) {
          return res.json({ error: "Email or password not working" });
        } else {
          return res.json(resDb.rows[0]);
        }
      })
      .catch(err => console.log(err));
  });

  return router;
};
