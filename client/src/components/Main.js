import React, { useState } from 'react';
import "./Main.scss";
import { Link } from "react-router-dom"
export default function Main(props) {

  return (
    <div class="center-div">
      <h1> Welcom to our App </h1>
      <Link to="./Login">
        <div class="div">
          start as a client
      </div>
        <div class="div">
          start as a provider
      </div>
      </Link>
    </div>

  )

}  