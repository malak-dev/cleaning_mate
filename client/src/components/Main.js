import React, { useState } from "react";
import "./Main.scss";
import { Link } from "react-router-dom";
import { ReactComponent as SpongeLogo } from "../Sponge.svg";

export default function Main(props) {
  // const [usertype, setUserType] = useState('')

  return (
    <div class="center-div main">
      <section className="logo-with-title">
        <SpongeLogo />
        <h1>Cleaning Mate</h1>
        <h2>You choose, we clean.</h2>
      </section>
      <Link to="./Login">
        <button onClick={() => props.setUserType("client")}>
          start as a client
        </button>
        <button onClick={() => props.setUserType("provider")}>
          start as a provider
        </button>
      </Link>
    </div>
  );
}
