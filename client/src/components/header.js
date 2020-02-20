import React from 'react'
import "./Header.scss";
import { Link } from 'react-router-dom';



export default function Header(props) {
  return (
    <header className="list-container">
      <nav>
        <ul>
          <li>
            <Link to="/">main</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/edit-profile">profile</Link>
          </li>
          <li>
            <Link to="/appointments">Appointments</Link>
          </li>
          <li>
            <Link to="/clientHome">Client Home</Link>
          </li>
          <li>
            <Link to="/providerHome">Provider Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}