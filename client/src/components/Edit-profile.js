import React, { useState } from "react";

export default function Edit(props) {



  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");

  return (
    <div class="edit">

      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
        className="form_elements"
      >
        <h1> Edit your Profile </h1>
        {props.userInformation &&
          <div className="form_elements" >
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
                placeholder={props.userInformation.email}
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
                type="password"
                placeholder={props.userInformation.password}
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
                placeholder={props.userInformation.phone_number}
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
                placeholder={props.userInformation.address}
                value={address}
                onChange={event => {
                  setAddress(event.target.value);
                }}
              />
            </div>

            <div className="m">
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
          </div>
        }
      </form>
    </div>
  );
}
