import React from 'react'
import "./Header.scss";
import { Link } from 'react-router-dom';
export default function Header(props) {
  return (
    <header className="list-container">
      <ul>
        <li className="list-item"><Link to="/">Home</Link></li>
        <li className="list-item"><Link to="/appointments">Appointments</Link></li>
        <li className="list-item"><Link to="/edit_profile"> Profile</Link></li>
      </ul>

    </header>
  )

}