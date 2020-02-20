import React, { useState } from 'react';
import "./login.scss";
export default function Register(props) {

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  //   const submitRegister = (first_name, last_name, email, password, phone_number, address) => {
  //     const data = {
  //       first_name,
  //       last_name,
  //       email,
  //       password,
  //       phone_number,
  //       address
  //     }
  //     axios.post('/api/clients', data)
  //       .then((response) => {
  //         console.log('submit login fn')
  //         console.log(response)
  //       }).catch((err) => {
  //         console.log(err)
  //       })

  //   }
  // }
  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [phone_number, setPhone_number] = useState("")
  
  return (
    <div >
      <h1 > Create a new Account </h1>
      <form autoComplete="off" onSubmit={event => event.preventDefault()} className="form_elements">
        <div className="form_elements" class="edit">
          <div class="form-group">
            <label >First Name</label>
            <input
              class="form-control"
              name="first_name"
              type="text"
              placeholder="Enter your first name"
              value={first_name}
              onChange={(event) => { setFirst_name(event.target.value) }}
            />
          </div>
          <div class="form-group">
            <label >Last Name</label>
            <input
              class="form-control"
              name="last_name"
              type="text"
              placeholder="Enter your last name"
              value={last_name}
              onChange={(event) => { setLast_name(event.target.value) }}
            />
          </div>
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
              onChange={(event) => { setEmail(event.target.value) }}
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              class="form-control"
              name="password"
              type="text"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => { setPassword(event.target.value) }}
            />
          </div>

          <div class="form-group">
            <label >Phone Number</label>
            <input
              class="form-control"
              name="phone_number"
              type="text"
              placeholder="Enter your phone number"
              value={phone_number}
              onChange={(event) => { setPhone_number(event.target.value) }}
            />
          </div>
          <div class="form-group">
            <label >Address</label>
            <input
              class="form-control"
              name="address"
              type="text"
              placeholder="Enter your home address"
              value={address}
              onChange={(event) => { setAddress(event.target.value) }}
            />
          </div>

          <button type="submit" onClick={() => { props.submitRegister(first_name, last_name, email, password, phone_number, address) }} class="btn btn-primary">Register</button>
        </div>
      </form >
    </div>
  )
}


