import React from 'react';
import './App.css';
import Login from "./components/login";
import Register from "./components/register"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"



function App() {
  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Register</Link>
            </li>

          </ul>
        </nav>
        <Switch>

          <Route path="/">
            <Login />
            <br />
            <Register />
          </Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
