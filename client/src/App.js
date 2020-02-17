import React from 'react';
import './App.css';
import Login from "./components/login";
import Register from "./components/register"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function App() {
  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Login />
      <br />
      <Register />
    </div>
  );
}

export default App;
