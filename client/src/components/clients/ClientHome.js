import React, { useState } from 'react';
import Calender from './Calendar'
import ReactCalendar from 'react-calendar';
import Map1 from './Map'

export default function ClientHome(props) {
  const { providerListData, pendingAppointmentDate, bookAppointment } = props

  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState("")
  return (
    <div className="clientHome">
      <p>choose the date, any time you want to start and the duration </p>
      <main>
        <section>
          <div>
            <ReactCalendar
              onChange={(date) => { setDate(date) }}
              value={date}
            />
          </div>
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
            <button type="submit" class="btn btn-primary" onClick={() => { props.submitDate(time, duration, date) }}>Request a helper</button>
          </div>
        </section>
        <Map1 providerListData={providerListData}
          pendingAppointmentDate={pendingAppointmentDate}
          bookAppointment={bookAppointment} />      </main>

    </div>
  )

}