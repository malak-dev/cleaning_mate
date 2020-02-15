CREATE TABLE appointments
(
  id SERIAL PRIMARY KEY NOT NULL,
  Date DATE NOT NULL,
  time TIME NOT NULL,
  hours VARCHAR(255) NOT NULL,
  booked BOOLEAN,
  cost_per_hour VARCHAR(255) NOT NULL ,
  comments VARCHAR(255) ,
  rating VARCHAR(255),
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  provider_id INTEGER REFERENCES providers(id) ON DELETE CASCADE

);