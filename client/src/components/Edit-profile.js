import React, { useState } from "react";

export default function Edit(props) {
  const [first_name, setFirst_name] = useState(
    props.userInformation.first_name
  );
  const [last_name, setLast_name] = useState(props.userInformation.last_name);
  const [email, setEmail] = useState(props.userInformation.email);
  const [password, setPassword] = useState(props.userInformation.password);
  const [address, setAddress] = useState(props.userInformation.address);
  const [phone_number, setPhone_number] = useState(
    props.userInformation.phone_number
  );

  return (
    <div>
      <h1> Edit your Profile </h1>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
        className="form_elements"
      >
        <div className="form_elements" class="edit">
          <div class="form-group">
            <label>First Name</label>
            <input
              class="form-control"
              name="first_name"
              type="text"
              placeholder={props.userInformation.first_name}
              value={first_name}
              onChange={event => {
                setFirst_name(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input
              class="form-control"
              name="last_name"
              type="text"
              placeholder={props.userInformation.last_name}
              value={last_name}
              onChange={event => {
                setLast_name(event.target.value);
              }}
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
              // placeholder="Enter your email"
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
              name="password"
              type="text"
              //placeholder="Enter your password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>Phone Number</label>
            <input
              class="form-control"
              name="phone_number"
              type="text"
              //placeholder="Enter your phone number"
              value={phone_number}
              onChange={event => {
                setPhone_number(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Address</label>
            <input
              class="form-control"
              name="address"
              type="text"
              //placeholder="Enter your home address"
              value={address}
              onChange={event => {
                setAddress(event.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            onClick={() => {
              props.updateUser(
                props.userInformation.id,
                first_name,
                last_name,
                email,
                password,
                phone_number,
                address
              );
            }}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
