
--- passed provider 1

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-02', 8, 1, true, 15, 'Great Work', 5, 2, 1);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-02', 9, 1, true, 20, 'Good Work', 5, 2, 1);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-02', 10, 1, true, 30, 'Not the best', 4, 2, 1);




--future & booked (No ratings, No comments)
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02', 10, 1, true, 20, null, null, 1, 1);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02', 11, 1, true, 15, null, null, 1, 1);


INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-02', 12, 1, true, 20, null, null, 2, 8);


INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-05-02', 13, 1, true, 23, null, null, 1, 7);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-05-02', 14, 1, true, 20, null, null, 2, 1);




--future & not booked (No ratings, No comments, No Client ID)
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 9, 1, false, 20, null, null, null, 6);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03', 8, 1, false, 15, null, null, null, 2);



INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03', 8, 1, false, 20, null, null, null, 3);


INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03', 9, 1, false, 23, null, null, null, 1);



INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-06', 9, 1, false, 20, null, null, null, 2);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-02', 10, 1, false, 15, null, null, null, 3);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-05-01', 11, 1, false, 20, null, null, null, 4);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-05-01', 12, 1, false, 20, null, null, null, 5);






INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02', 10, 1, false, 20, null, null, null, 2);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-03', 11, 1, true, 15, null, null, 1, 2);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-05', 12, 1, true, 15, null, null, 2, 2);





INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-03', 11, 1, false, 15, null, null, 1, 5);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03', 12, 1, false, 15, null, null, 2, 2);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03', 11, 1, false, 25, null, null, 1, 3);

INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03', 12, 1, false, 20, null, null, 2, 4);