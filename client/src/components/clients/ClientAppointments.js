import React, { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./ClientAppointments.scss";
import Comment from './Comment'
export default function ClientAppointments(props) {
  const clientAppointments = props.clientAppointments || [];
  return (
    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Client</th>
          <th scope="col">Status</th>
          <th scope="col">Rating</th>
          <th scope="col">Comments</th>
        </tr>
      </thead>
      <tbody>
        {clientAppointments.map(data => (

          <tr key={data.id}>
            <td >{data.date}</td>
            <td>{data.first_name}</td>
            <td>{data.status}</td>
            <td><Rater total={5} rating={data.rating} /></td>
            {data.comment && <td>{data.comment}</td>}
            {!data.comment && <td><Comment /></td>}

          </tr>
        ))}
      </tbody>
    </table>
  );
}
