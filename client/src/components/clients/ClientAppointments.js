import React, { useState, useEffect } from "react";
import "./ClientAppointments.scss";
import Comment from "./Comment";
import axios from "axios";
import Moment from "react-moment";

export default function ClientAppointments(props) {
  const [rating, setRating] = useState("");
  const { userInformation } = props;
  const [clientAppointments, setClientAppointments] = useState([]);

  function getClientAppointments(id) {
    axios
      .get(`/api/clients/${id}/appointments`)
      .then(response => {
        setClientAppointments(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (userInformation) {
      getClientAppointments(userInformation.id);
    }
  }, []);

  return (
    <div className="table1">
      <table className="table table-hover">
        <thead className="head">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Provider</th>
            <th scope="col">Status</th>
            <th scope="col">Rating</th>
            <th scope="col">Comments</th>

          </tr>
        </thead>
        <tbody>
          {clientAppointments.map(data => (
            <tr key={data.id}>
              <Moment format="YYYY/MM/DD">{data.date}</Moment>
              <td>{data.first_name}</td>
              <td>{data.status}</td>
              {data.status === "Upcoming" && <td>you can't rate yet </td>}
              {data.status === "Completed" && !data.rating && (
                <td>
                  <Rater
                    total={5}
                    rating={data.rating}
                    onRate={({ rating }) => {
                      setRating(rating);
                    }}
                  />
                </td>
              )}
              {data.status === "Completed" && data.rating && (
                <td>
                  <Rater
                    total={5}
                    rating={data.rating}
                    interactive={false}
                    onRate={({ rating }) => {
                      setRating(rating);

                    }}
                  />
                </td>
              )}
              {data.comment && <td>{data.comment}</td>}
              {data.status === "Upcoming" && !data.comment && (<td>you can't comment yet</td>)}
              {data.status === "Completed" && !data.comment && (
                <td><Comment
                  rating={rating}
                  id={data.id}
                  getClientAppointments={getClientAppointments}
                  userInformation={userInformation}
                /></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
