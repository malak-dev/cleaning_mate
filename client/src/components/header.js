import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as SpongeLogo } from "../Sponge.svg";

export default function Header(props) {
  return (
    <header className="list-container">
      <nav>
        <ul>
          <SpongeLogo />
          {/*   <li className="list-item">
            <Link to="/">main</Link>
  </li> */}
          {/* <li className="list-item"><Link to="/login">Login</Link></li>
          <li className="list-item"><Link to="/register">Register</Link></li> */}
          <li className="list-item"><Link to="/edit-profile">profile</Link></li>
          <li className="list-item"><Link to="/appointments">Appointments</Link></li>
          <li className="list-item"><Link to="/Home">Home</Link></li>
          <li className="list-item" onClick={() => props.submitLogout()}><Link to="/main">logout</Link></li>
          <li className="list-item"><Link to="/map">Map</Link></li>

        </ul>
      </nav>
    </header>
  );
}
