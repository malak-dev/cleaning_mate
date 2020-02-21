import React from 'react'
import "./Header.scss";
import { Link } from 'react-router-dom';



export default function Header(props) {

  return (
    <header className="list-container">
      <nav>
        <ul>
          <li className="list-item"><Link to="/">main</Link></li>
          {/* <li className="list-item"><Link to="/login">Login</Link></li>
          <li className="list-item"><Link to="/register">Register</Link></li> */}
          <li className="list-item"><Link to="/edit-profile">profile</Link></li>
          <li className="list-item"><Link to="/appointments">Appointments</Link></li>
          <li className="list-item"><Link to="/Home">Home</Link></li>
          <li className="list-item" onClick={() => props.submitLogout()}><Link to="/login">logout</Link></li>

        </ul>
      </nav>
    </header>
  )

}