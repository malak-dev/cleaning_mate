import React, { useState } from "react";
import "./login.scss";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ReactComponent as SpongeLogo } from "../Sponge.svg";

export default function Login(props) {
  console.log(props, "hello");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  return (
    <div className="edit">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <section className="logo-login">
          <SpongeLogo />
          <h1>Cleaning Mate</h1>
          <h2>You choose, we clean.</h2>
          <br />
        </section>
        <h> Login In Our App</h>

        <div className="form_elements" >
          <div class="form-group">
            <input
              class="form-control"
              aria-describedby="emailHelp"
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
          <div id="button1">
            <div className="m">
              <button type="submit"
                onClick={() => {
                  props.submitlogin(email, password, history);
                }} class="btn btn-primary"> Login
          </button>
            </div>
            <br />
            <div className="m">
              <Link to="./Register" >
                <button type="button" class="btn btn-primary" >
                  Register Here
          </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div >
  );
}
