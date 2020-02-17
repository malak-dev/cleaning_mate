import React from 'react'
import "./Header.scss";
export default function Header(props) {
  return (
    <header className="list-container">
      <ul>
        <li className="list-item"><a href="/">Home</a></li>
        <li className="list-item"><a href="/appointments">Appointments</a></li>
        <li className="list-item"><a href="/edit_profile"> Profile</a></li>
      </ul>

    </header>
  )

}