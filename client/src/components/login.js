import React, { useState } from 'react';
import "./login.scss";
export default function Login(props) {

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  return (
    <div className="form">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <h1 className="form_elements"> Login here </h1>
        <div className="form_elements" class="edit">
          <div class="form-group">
            <label >Email address</label>
            <input
              class="form-control"
              aria-describedby="emailHelp"
              id="exampleInputEmail1"
              name="email"
              type="email"
              placeholder="Enter your email"
            // value={email}
            // onChange={(event) => { setEmail(event.target.value) }}
            />
          </div>
          <div class="form-group">
            <label >Password</label>
            <input
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              type="email"
              placeholder="Enter your password"
            // value={password}
            // onChange={(event) => { setPassword(event.target.value) }}
            />
          </div>

          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form >
    </div>
  )
}


