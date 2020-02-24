import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactCalendar from "react-calendar";

export default function ProviderHome(props) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();
  const [duration, setDuration] = useState();
  const [costPerHour, setCostPerHour] = useState();
  const [day_appointments, SetDayAppointments] = useState([]);

  console.log(date);
  console.log(day_appointments);

  function getDayAppointments(id) {
    const data = {
      selected_date: date
    };
    axios
      .post(`/api/providers/${id}/appointments/day`, data)
      .then(response => {
        SetDayAppointments(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (props.userInformation.id) {
      getDayAppointments(props.userInformation.id);
    }
  }, [date, props.createAppointment]);

  return (
    <div className="clientHome">
      <h1>Manage your Schedule </h1>
      <br />
      <main>
        <section>
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
              <input
                class="form-control"
                name="start-time"
                type="text"
                value={time}
                onChange={event => {
                  setTime(event.target.value);
                }}
                placeholder="Start time"
              />
            </label>
          </div>
          <div class="form-group">
            <label>
              <input
                class="form-control"
                name="start-time"
                type="number"
                placeholder="Wished duration"
                value={duration}
                onChange={event => {
                  setDuration(event.target.value);
                }}
              />
            </label>
          </div>
          <div class="form-group">
            <label>
              <input
                class="form-control"
                name="cost_per_hour"
                type="number"
                placeholder="$/hour"
                value={costPerHour}
                onChange={event => {
                  setCostPerHour(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="m">
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
        </section>
        <div className="table1">
          <table className="table table-hover">
            <thead className="head">
              <tr>
                <th scope="col">Hour</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {day_appointments.map(data => (
                <tr key={data.hour}>
                  <td>{data.hour}</td>
                  <td>{data.day_schedule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
