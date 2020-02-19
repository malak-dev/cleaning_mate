
-- passed 
INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-01',8,1,true,15,null,5,2,1);
  
 INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-02',8,1,true,15,null,5,2,1);

    INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-02',9,1,true,15,null,5,2,1);

      INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-02',10,1,true,15,null,4,2,1);


      INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-02',10,1,true,15,null,4,2,2);

        INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-02-02',10,1,true,15,null,4,2,3);


--future & booked (No ratings, No comments)
        INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02',10,1,true,15,null,null,2,1);

          INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02',11,1,true,15,null,null,2,1);


        INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02',12,1,true,15,null,null,2,1);


        INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02',13,1,true,15,null,null,2,1);

       INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02',14,1,true,15,null,null,2,1);




--future & not booked (No ratings, No comments, No Client ID)
       INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02',8,1,false,15,null,null,null,1);

         INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02',8,1,false,15,null,null,null,2);


         INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02',8,1,false,15,null,null,null,3);


         INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-02',9,1,false,15,null,null,null,1);



         INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03',9,1,false,15,null,null,null,1);

           INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03',10,1,false,15,null,null,null,1);

           INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03',11,1,false,15,null,null,null,1);

           INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03',12,1,false,15,null,null,null,1);




           INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03',9,1,false,15,null,null,null,2);

           INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03',10,1,false,15,null,null,null,2);

           INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03',11,1,false,15,null,null,null,2);

           INSERT INTO appointments
  (date,start_time,hours,booked,cost_per_hour,comment,rating,client_id,provider_id)
VALUES
  ('2020-03-03',12,1,false,15,null,null,null,2);