

DROP TABLE IF EXISTS appointments
CASCADE;
CREATE TABLE appointments
(
  id SERIAL PRIMARY KEY NOT NULL,
  Date DATE NOT NULL,
  start_time INTEGER NOT NULL,
  hours INTEGER NOT NULL,
  booked BOOLEAN DEFAULT false ,
  cost_per_hour numeric(10,2) DEFAULT 15 ,
  comment VARCHAR(255) ,
  rating INTEGER CHECK (rating <= 5),
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  provider_id INTEGER NOT NULL REFERENCES providers(id) ON DELETE CASCADE

);
