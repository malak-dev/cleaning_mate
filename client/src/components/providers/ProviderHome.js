import React, { useState } from "react";

import ReactCalendar from "react-calendar";

export default function ProviderHome(props) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(8);
  const [duration, setDuration] = useState(1);
  const [costPerHour, setCostPerHour] = useState(15);

  return (
    <div>
      <p>Manage your Availabilities </p>

      <div>
        <ReactCalendar
          onChange={date => {
            setDate(date);
          }}
          value={date}
        />
      </div>
      <div class="form-group">
        <label>
          start time
          <input
            class="form-control"
            name="start-time"
            type="text"
            value={time}
            onChange={event => {
              setTime(event.target.value);
            }}
          />
        </label>
      </div>
      <div class="form-group">
        <label>
          Duration
          <input
            class="form-control"
            name="start-time"
            type="number"
            value={duration}
            onChange={event => {
              setDuration(event.target.value);
            }}
          />
        </label>
      </div>
      <div class="form-group">
        <label>
          $/hour
          <input
            class="form-control"
            name="cost_per_hour"
            type="number"
            value={costPerHour}
            onChange={event => {
              setCostPerHour(event.target.value);
            }}
          />
        </label>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        onClick={() => {
          props.createAppointment(
            time,
            duration,
            date,
            costPerHour,
            props.userInformation.id
          );
        }}
      >
        Add Availabilities
      </button>
    </div>
  );
}
