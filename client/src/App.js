import React from "react";
import axios from "axios";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main'
import Edit from './components/Edit-profile'
import ProviderAppointments from './components/providers/ProviedAppointments'
import ClientAppointments from './components/clients/ClientAppointments'
import Calendar from './components/clients/Calendar'
import ClientHome from './components/clients/ClientHome'
import ProviderList from './components/clients/ProviderList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation
} from "react-router-dom"

function App() {
  const [userType, setUserType] = useState("client");
  const [userInformation, setUserInformation] = useState()
  const [clientAppointments, setClientAppointments] = useState("");
  const [providerListData, setProviderListData] = useState("")



  // send the login information to the backend
  const submitlogin = (email, password, history) => {
    const data = {
      email: email,
      password: password
    };
    axios.post(`/api/${userType}s/login`, data)
      .then(response => {
        if (!response.data.error) {

          setUserInformation(response.data)
          history.replace("/clientHome");
        }
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      })
      .catch(err => {
        console.log(err);
      });
  };
  //create a new account
  const submitRegister = (first_name, last_name, email, password, phone_number, address) => {
    const data = {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      address
    };
    axios.post("/api/clients", data).then(response => {
      console.log("submit login fn");
      console.log(response);
    });
  };

  const userId = 1;
  //get all the appointments
  useEffect(() => {
    axios.get(`/api/clients/${userId}/appointments`)
      .then(response => {
        console.log("hi")
        console.log(response.data);
        setClientAppointments(response.data);
        console.log("hello");
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  // submit date ,time and duration 
  const submitDate = (time, duration, date) => {
    const data = {
      selected_startTime: time,
      selected_hours: duration,
      selectedDate: date
    }
    console.log("i am data", data)
    axios.post('/api/appointments', data)
      .then((response) => {
        console.log('i am response', response.data)
        setProviderListData(response.data)
      }).catch((err) => {
        console.log(err)
      })
  };



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
              <Link to="/clientHome">Client Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login submitlogin={submitlogin} />
          </Route>
          <Route path="/register">
            <Register submitRegister={submitRegister} />
          </Route>
          <Route path="/edit-profile">
            <Header />
            <Edit />
          </Route>
          <Route path="/appointments">
            <Header />
            {userType === "client" && (
              <ClientAppointments clientAppointments={clientAppointments} />
            )}
            {userType === "provider" && <ProviderAppointments />}
          </Route>
          <Route path="/clientHome">
            <Header />
            <ClientHome
              submitDate={submitDate} />
            <ProviderList
              providerListData={providerListData} />
          </Route>
          <Route path="/">
            <Main setUserType={setUserType} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
