import React from 'react'

export default function Edit(props) {
  return (
    <div >
      <h1 > Edit your Profile </h1>
      <form autoComplete="off" onSubmit={event => event.preventDefault()} className="form_elements">
        <div className="form_elements" class="edit">
          <div class="form-group">
            <label >First Name</label>
            <input
              class="form-control"
              name="first_name"
              type="text"
              placeholder="Enter your first name"
            // value={first_name}
            //onChange={(event) => { setPassword(event.target.value) }}
            />
          </div>
          <div class="form-group">
            <label >Last Name</label>
            <input
              class="form-control"
              name="last_name"
              type="text"
              placeholder="Enter your last name"
            // value={password}
            // onChange={(event) => { setPassword(event.target.value) }}
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
            //value={email}
            //onChange={(event) => { setEmail(event.target.value) }}
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              class="form-control"
              name="password"
              type="email"
              placeholder="Enter your password"
            // value={password}
            // onChange={(event) => { setPassword(event.target.value) }}
            />
          </div>

          <div class="form-group">
            <label >Phone Number</label>
            <input
              class="form-control"
              name="phone_number"
              type="text"
              placeholder="Enter your phone number"
            // value={password}
            // onChange={(event) => { setPassword(event.target.value) }}
            />
          </div>
          <div class="form-group">
            <label >Address</label>
            <input
              class="form-control"
              name="address"
              type="text"
              placeholder="Enter your home address"
            // value={password}
            // onChange={(event) => { setPassword(event.target.value) }}
            />
          </div>

          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form >
    </div>
  )
}