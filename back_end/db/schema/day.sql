
DROP TABLE IF EXISTS day
CASCADE;
CREATE TABLE day
(
  hour INTEGER NOT NULL CHECK (hour <= 21)

);