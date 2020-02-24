import React, { useState, useEffect } from 'react';
import Calender from './Calendar'
import ReactCalendar from 'react-calendar';
import Map1 from './Map'
import Axios from 'axios';

export default function ClientHome(props) {
  const { providerListData, pendingAppointmentDate, bookAppointment } = props

  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState("")
  const [day, setDay] = useState("")


  return (
    <div className="clientHome">
      <h id="head">Choose Your Best Time</h>
      <br />
      <br />
      <main>
        <section>
          <div >
            <ReactCalendar
              onChange={(date) => { setDate(date) }}
              value={date}
              onClickDay={(date) => { props.submitDay(date) }}
            />
          </div >
          <div class="form-group">
            <label >
              <input
                class="form-control"
                name="start-time"
                type="text"
                value={time}
                onChange={(event) => { setTime(event.target.value) }}
                placeholder="Start time"
              /></label>
            <label >
              <input
                class="form-control"
                name="start-time"
                type="number"
                value={duration}
                placeholder="Wished duration"
                onChange={(event) => { setDuration(event.target.value) }}

              /></label>
            <div className="m">
              <button type="submit" className="btn btn-primary" onClick={() => { props.submitDate(time, duration, date) }}>Filter</button>
            </div>

          </div>
        </section>
        <Map1 providerListData={providerListData}
          pendingAppointmentDate={pendingAppointmentDate}
          bookAppointment={bookAppointment}

        />
      </main>

    </div>
  )

}