import React, { useState, useEffect } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./ProviderAppointments.scss";
import axios from "axios";
import Moment from "react-moment";

export default function ProviderAppointments(props) {
  const { userInformation } = props;
  const [providerAppointments, setProviderAppointments] = useState([]);

  function getProviderAppointments(id) {
    axios
      .get(`/api/providers/${id}/appointments`)
      .then(response => {
        setProviderAppointments(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function cancelAppointment(appointmentId) {
    axios
      .delete(`/api/appointments/${appointmentId}`)
      .then(response => {
        console.log(response.data);
        getProviderAppointments(userInformation.id);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (userInformation) {
      getProviderAppointments(userInformation.id);
    }
  }, []);

  console.log(providerAppointments);

  return (

    <div className="table1">
      <br />
      <br />
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Client</th>
            <th scope="col">$/Hour</th>
            <th scope="col">Status</th>
            <th scope="col">Booked</th>
            <th scope="col">Rating</th>
            <th scope="col">Comments</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {providerAppointments.map(data => (
            <tr key={data.id}>
              <td>
                <Moment format="YYYY/MM/DD">{data.date}</Moment>
              </td>
              <td>{data.start_time}</td>
              <td>{data.first_name}</td>
              <td>{data.cost_per_hour}</td>
              <td>{data.status}</td>
              <td>{data.booked}</td>
              <td>
                {data.status !== "Upcoming" && (
                  <Rater total={5} rating={data.rating} interactive={false} />
                )}
              </td>
              <td>{data.comment}</td>
              <td>
                {data.booked === "Available" && (
                  <div className="m">
                    <button
                      type="submit"
                      onClick={() => cancelAppointment(data.id)}
                      class="btn btn-primary"
                    >
                      cancel
                </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
