import React, { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./ProviderAppointments.scss";

export default function ProviderAppointments(props) {
  const providerAppointments = props.providerAppointments || [];
  return <h1> i am the providers appointments compontent</h1>;
}
