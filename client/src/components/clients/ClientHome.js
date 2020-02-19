import React, { useState } from 'react';
import Calender from './Calendar'
import ReactCalendar from 'react-calendar';

export default function ClientHome(props) {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState("")

  return (
    <div>
      <p>choose the date, any time you want to start and the duration </p>

      <div>
        <ReactCalendar
          onChange={(date) => { setDate(date) }}
          value={date}
        />
      </div>
      <div class="form-group">
        <label >start time
            <input
            class="form-control"
            name="start-time"
            type="text"
            value={time}
            onChange={(event) => { setTime(event.target.value) }}
          /></label>
      </div>
      <div class="form-group">
        <label >Duration
            <input
            class="form-control"
            name="start-time"
            type="number"
            value={duration}
            onChange={(event) => { setDuration(event.target.value) }}

          /></label>
      </div>
      <button type="submit" class="btn btn-primary" onClick={() => { props.submitDate(time, duration, date) }}>Request a helper</button>


    </div>
  )

}