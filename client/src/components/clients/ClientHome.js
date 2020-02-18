import React, { useState } from 'react';
import Calender from './Calendar'
export default function ClientHome(props) {


  return (
    <div>
      <p>choose the date, any time you want to start and the duration </p>
      <Calender />
      <div class="form-group">
        <label >start time
            <input
            class="form-control"
            name="start-time"
            type="text"
          /></label>
      </div>
      <div class="form-group">
        <label >Duration
            <input
            class="form-control"
            name="start-time"
            type="number"
          /></label>
      </div>
      <button type="submit" class="btn btn-primary">Request a helper</button>


    </div>
  )

}