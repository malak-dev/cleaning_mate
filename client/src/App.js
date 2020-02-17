import React from 'react';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main'
import Edit from './components/Edit-profile'
import ProviderAppointments from './components/providers/ProviedAppointments'
import ClientAppointments from './components/clients/ClientAppointments'
import Calendar from './components/clients/Calendar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"



function App() {
  const [userType, setUserType] = useState('client')

  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">main</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/edit-profile">profile</Link>
            </li>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/edit-profile">
            <Header />
            <Edit />
          </Route>
          <Route path="/appointments">
            <Header />
            {userType === 'client' && <ClientAppointments />}
            {userType === 'provider' && <ProviderAppointments />}
          </Route>
          <Route path="/home">
            <Header />
            <Calendar />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
