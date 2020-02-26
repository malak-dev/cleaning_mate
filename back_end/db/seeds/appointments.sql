--- passed provider 1
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-02', 8, 1, true, 15, 'Great Work', 5, 1, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-03', 9, 1, true, 20, 'Good Work', 5, 2, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-04', 10, 1, true, 30, 'Not the best', 5, 3, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-05', 10, 1, true, 30, 'Super Work', 5, 4, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-06', 10, 1, true, 30, 'Thank you!!!!', 4, 5, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-07', 10, 1, true, 30, 'Late to Work', 5, 1, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-08', 10, 1, true, 30, 'Best in the City', 4, 2, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-09', 10, 1, true, 30, 'Good Good Good', 5, 3, 4);
--- passed client 1
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2019-11-01', 8, 1, true, 15, 'Great Work', 5, 1, 2);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2019-12-03', 8, 1, true, 15, 'Thank You', 4, 1, 3);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-01-04', 8, 1, true, 15, '', null, 1, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2019-10-02', 8, 1, true, 15, 'Excellent', 5, 1, 5);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2019-09-02', 8, 1, true, 15, 'Merci', 4, 1, 6);
--future & booked Provider 1(No ratings, No comments)
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02', 10, 1, true, 21, null, null, 2, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03', 11, 1, true, 15, null, null, 3, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-04', 12, 1, true, 22, null, null, 4, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-05', 13, 1, true, 23, null, null, 5, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-06', 14, 1, true, 20, null, null, 6, 1);
--future & booked Client1(No ratings, No comments)
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-04', 10, 1, true, 20, null, null, 1, 2);
--future & not booked (No ratings, No comments, No Client ID)
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 9, 1, false, 15, null, null, null, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 9, 1, false, 15, null, null, null, 2);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 9, 1, false, 17, null, null, null, 3);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 9, 1, false, 18, null, null, null, 4);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 9, 1, false, 35, null, null, null, 5);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 9, 1, false, 43, null, null, null, 6);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 9, 1, false, 21, null, null, null, 7);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 9, 1, false, 22, null, null, null, 8);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 10, 1, false, 15, null, null, null, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 10, 1, false, 15, null, null, null, 2);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 10, 1, false, 17, null, null, null, 3);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 10, 1, false, 18, null, null, null, 4);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 10, 1, false, 35, null, null, null, 5);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 10, 1, false, 43, null, null, null, 6);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 10, 1, false, 21, null, null, null, 7);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 10, 1, false, 22, null, null, null, 8);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 11, 1, false, 15, null, null, null, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 11, 1, false, 15, null, null, null, 2);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 11, 1, false, 17, null, null, null, 3);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 11, 1, false, 18, null, null, null, 4);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 11, 1, false, 35, null, null, null, 5);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 12, 1, false, 17, null, null, null, 3);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 12, 1, false, 18, null, null, null, 4);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-01', 12, 1, false, 35, null, null, null, 5);
--future & not booked Provider 1 (No ratings, No comments, No Client ID)
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-10', 12, 1, false, 25, null, null, null, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-11', 12, 1, false, 25, null, null, null, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-12', 12, 1, false, 25, null, null, null, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-13', 12, 1, false, 25, null, null, null, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-14', 12, 1, false, 25, null, null, null, 1);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-15', 12, 1, false, 25, null, null, null, 1);



INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-02', 12, 1, false, 25, null, null, null, 2);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-03', 12, 1, false, 25, null, null, null, 2);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-02', 12, 1, false, 25, null, null, null, 3);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-03', 12, 1, false, 25, null, null, null, 3);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-03', 12, 1, false, 25, null, null, null, 4);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-03', 12, 1, false, 25, null, null, null, 5);



INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-02', 12, 1, false, 25, null, null, null, 6);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-03', 12, 1, false, 25, null, null, null, 7);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-02', 12, 1, false, 25, null, null, null, 10);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-03', 12, 1, false, 25, null, null, null, 8);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-03', 12, 1, false, 25, null, null, null, 9);
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-04-02', 12, 1, false, 25, null, null, null, 5);