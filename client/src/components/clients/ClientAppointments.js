import React, { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./ClientAppointments.scss";
export default function ClientAppointments(props) {
  const clientAppointments = props.clientAppointments || [];
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Client</th>
          <th scope="col">Status</th>
          <th scope="col">Rating</th>
          <th scope="col">Comments</th>
        </tr>
      </thead>
      <tbody>
        <div>
          {clientAppointments.map(data => (
            <div key={data.first_name}>
              <tr>
                <td>{data.date}</td>
                <td>{data.first_name}</td>
                <td>{data.status}</td>
                <td>
                  <Rater total={5} rating={data.rating} />
                </td>
                <td>{data.comment}</td>
              </tr>
            </div>
          ))}
        </div>
      </tbody>
    </table>
  );
}
