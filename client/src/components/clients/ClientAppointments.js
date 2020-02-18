import React, { useState } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './ClientAppointments.scss'
export default function ClientAppointments(props) {

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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td><Rater total={5} rating={2} /></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><Rater total={5} rating={2} /></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  )

}