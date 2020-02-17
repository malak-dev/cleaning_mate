import React, { useState } from 'react';
import "./login.css";
export default function Register(props) {

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  return (
    <div className="form">
      <h1> Register here </h1>
      <form autoComplete="off" onSubmit={event => event.preventDefault()} >
        <div class="form-group">
          <label >First Name
          <input
              class="form-control"
              name="first_name"
              type="text"
              placeholder="Enter your first name"
            // value={first_name}
            //onChange={(event) => { setPassword(event.target.value) }}
            /></label>
        </div>
        <div class="form-group">
          <label >Last Name
          <input
              class="form-control"
              name="last_name"
              type="text"
              placeholder="Enter your last name"
            // value={password}
            // onChange={(event) => { setPassword(event.target.value) }}
            /></label>
        </div>
        <div class="form-group">
          <label>Email address
          <input
              class="form-control"
              aria-describedby="emailHelp"
              id="exampleInputEmail1"
              name="email"
              type="email"
              placeholder="Enter your email"
            //value={email}
            //onChange={(event) => { setEmail(event.target.value) }}
            /></label>
        </div>
        <div class="form-group">
          <label>Password
          <input
              class="form-control"
              name="password"
              type="email"
              placeholder="Enter your password"
            // value={password}
            // onChange={(event) => { setPassword(event.target.value) }}
            /></label>
        </div>

        <div class="form-group">
          <label >Phone Number
          <input
              class="form-control"
              name="phone_number"
              type="number"
              placeholder="Enter your phone number"
            // value={password}
            // onChange={(event) => { setPassword(event.target.value) }}
            /></label>
        </div>
        <div class="form-group">
          <label >Address
          <input
              class="form-control"
              name="address"
              type="text"
              placeholder="Enter your home address"
            // value={password}
            // onChange={(event) => { setPassword(event.target.value) }}
            /></label>
        </div>
        <div class="switch">
          <label>
            client
            <input type="checkbox" checked />
            <span class="lever"></span> cleanner
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form >
    </div>
  )
}


