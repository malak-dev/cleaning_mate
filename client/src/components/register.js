import React, { useState } from "react";
import "./login.scss";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ReactComponent as SpongeLogo } from "../Sponge.svg";


require("dotenv").config();

export default function Register(props) {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  let history = useHistory();

  const token = process.env.TOKEN;

  const findLatLong = address => {
    return axios
      .get(
        `https://us1.locationiq.com/v1/search.php?key=009b968466b426&q=${address}&format=json`
      )
      .then(response => {
        console.log(response.data[0], "ia respons api");

        return response.data[0];
      })
      .then(response => {
        const { lat, lon } = response;
        return [lat, lon];
      });
  };

  const handleClick = event => {
    let encodeAddress = encodeURI(address);
    findLatLong(encodeAddress).then(response => {
      console.log(response, "i am response from find");
      let lat = response[0];
      let lon = response[1];
      console.log(lat, lon);
      props.submitRegister(
        first_name,
        last_name,
        email,
        password,
        phone_number,
        address,
        lat,
        lon,
        history
      );
      console.log("hello");
    });
  };
  return (
    <div className="edit">
      <form autoComplete="off" onSubmit={event => event.preventDefault()} className="form_elements">
        <section className="logo-login">
          <SpongeLogo />
          <h1>Cleaning Mate</h1>
          <h2>You choose, we clean.</h2>
          <br />
        </section>
        <div className="form_elements" >
          <div class="form-group">
            <input
              class="form-control"
              name="first_name"
              type="text"
              placeholder="Enter your first name"
              value={first_name}
              onChange={event => {
                setFirst_name(event.target.value);
              }}
            />
          </div>
          <div class="form-group">

            <input
              class="form-control"
              name="last_name"
              type="text"
              placeholder="Enter your last name"
              value={last_name}
              onChange={event => {
                setLast_name(event.target.value);
              }}
            />
          </div>
          <div class="form-group">

            <input
              class="form-control"
              aria-describedby="emailHelp"
              id="exampleInputEmail1"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div class="form-group">

            <input
              class="form-control"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div class="form-group">

            <input
              class="form-control"
              name="phone_number"
              type="tel"
              placeholder="Enter your phone number"
              value={phone_number}
              onChange={event => {
                setPhone_number(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              name="address"
              type="text"
              placeholder="Enter your home address"
              value={address}
              onChange={event => {
                setAddress(event.target.value);
              }}
            />
          </div>
          <div className="m">
            <button type="submit" onClick={handleClick} class="btn btn-primary">
              Register
          </button>
          </div>
        </div>
      </form>
    </div>
  );
}
