import React, { useState } from "react";
import "./Main.scss";
import { Link } from "react-router-dom";
export default function Main(props) {
  // const [usertype, setUserType] = useState('')

  return (
    <div class="center-div">
      <h1> Welcome to our App </h1>
      <Link to="./Login">
        <div class="div" onClick={() => props.setUserType("client")}>
          start as a client
        </div>
        <div class="div" onClick={() => props.setUserType("provider")}>
          start as a provider
        </div>
      </Link>
    </div>
  );
}
