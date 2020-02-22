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
    <div className="form">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <section className="logo-login">
          <SpongeLogo />
          <h1>Cleaning Mate</h1>
          <h2>You choose, we clean.</h2>
        </section>
        <div className="form_elements" class="edit">
          <div class="form-group">
            <label>Email address</label>
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
            <label>Password</label>
            <input
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              type="text"
              placeholder="Enter your password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            onClick={() => {
              props.submitlogin(email, password, history);
            }}
            class="btn btn-primary"
          >
            Login
          </button>
        </div>
      </form>
      <footer>
        <Link to="./Register">
          <p></p>
          <p></p>
          <button type="button" class="btn btn-success">
            Register Here
          </button>
        </Link>
      </footer>
    </div>
  );
}
