import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as SpongeLogo } from "../Sponge.svg";

export default function Header(props) {
  return (
    <header className="list-container">
      <nav>
        <ul>
          <li className="list-item">
            <Link to="/Home">
              {" "}
              <SpongeLogo />
            </Link>
          </li>
          <li className="list-item">
            <Link to="/appointments">Appointments</Link>
          </li>
          <li className="list-item">
            <Link to="/edit-profile">Profile</Link>
          </li>
          <li className="list-item" onClick={() => props.submitLogout()}>
            <Link to="/main">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
