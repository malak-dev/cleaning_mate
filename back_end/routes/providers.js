const router = require("express").Router();

module.exports = db => {
  // Get all appointment for selected provider
  router.get("/:userId/appointments", (req, res) => {
    const userId = req.params.userId;

    const query = {
      text: `SELECT a.date as date ,a.start_time as start_time, b.first_name as first_name,  
           CASE
           WHEN date > now() THEN 'Upcoming' 
           WHEN booked = true THEN 'Completed'
           ELSE '' END AS status,
           
           CASE
           WHEN booked = true THEN 'Booked' 
           WHEN  date > now() THEN 'Available' ELSE '' END AS booked,

            a.cost_per_hour as cost_per_hour, a.comment as comment, a.rating as rating, a.id as id
           FROM appointments as a
           LEFT JOIN clients as b on b.id = a.client_id
           WHERE a.provider_id =$1
           ORDER BY date desc, start_time desc;`,
      values: [userId]
    };
    db.query(query)
      .then(resDb => {
        res.json(resDb.rows);
      })
      .catch(err => console.error("query error", err.stack));
  });

  // Insert New appointments for a specific provider
  router.post("/:userId/appointments", (req, res) => {
    const userId = req.params.userId;
    const {
      selected_date,
      selected_startTime,
      selected_hours,
      costPerHour
    } = req.body;

    let startTime = Number(selected_startTime);
    let hours = Number(selected_hours);
    let applist = [];
    for (let i = 0; i < hours; i++) {
      let sd = startTime + i;
      const query = {
        text:
          "INSERT INTO appointments (date, start_time, cost_per_hour, provider_id) VALUES ($1 ,$2 ,$3 ,$4);",
        values: [selected_date, sd, Number(costPerHour), Number(userId)]
      };
      applist.push(db.query(query));
    }
    console.log(applist);
    Promise.all(applist).then(dbRes => res.send(201));
  });

  //Insert a new provider
  router.post("/", (req, res) => {
    const {
      email,
      password,
      first_name,
      last_name,
      phone_number,
      address
    } = req.body;
    console.log(phone_number, "i am number");
    const query = {
      text:
        "INSERT INTO providers(email, password, first_name, last_name, phone_number, address) VALUES ($1 ,$2 ,$3 ,$4 ,$5, $6) RETURNING *;",
      values: [email, password, first_name, last_name, phone_number, address]
    };
    db.query(query)
      .then(dbRes => res.send(201))
      .catch(err => console.log(err));
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
      text: "SELECT * FROM providers WHERE email = $1 and password = $2;",
      values: [email, password]
    };
    db.query(query)
      .then(resDb => {
        if (!resDb.rowCount) {
          return res.json({ error: "Email or password not working" });
        } else {
          return res.json(resDb.rows[0]);
        }
      })
      .catch(err => console.log(err));
  });

  // Get all appointment for selected provider for a specific day
  router.post("/:userId/appointments/day", (req, res) => {
    const userId = req.params.userId;

    const { selected_date } = req.body;

    const query = {
      text: `SELECT a.hour, CASE WHEN b.booked = true THEN 'Booked' WHEN  b.booked = false THEN 'Available' ELSE 'Empty' end as day_schedule
      FROM day as a
      LEFT JOIN (SELECT start_time, booked FROM appointments
      WHERE provider_id =$1 and date = $2) as b on a.hour = b.start_time;`,
      values: [userId, selected_date]
    };
    db.query(query)
      .then(resDb => {
        res.json(resDb.rows);
      })
      .catch(err => console.error("query error", err.stack));
  });

  return router;
};
