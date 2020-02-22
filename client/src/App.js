import React from "react";
import axios from "axios";
import "./App.scss";
import Login from "./components/Login";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Edit from "./components/Edit-profile";
import ProviderAppointments from "./components/providers/ProviderAppointments";
import ClientAppointments from "./components/clients/ClientAppointments";
import Calendar from "./components/clients/Calendar";
import ClientHome from "./components/clients/ClientHome";
import ProviderHome from "./components/providers/ProviderHome";
import ProviderList from "./components/clients/ProviderList";
import Map1 from './components/clients/Map'
import { ReactComponent as SpongeLogo } from "./Sponge.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";

function App() {
  const [userType, setUserType] = useState("");
  const [userInformation, setUserInformation] = useState();
  const [providerListData, setProviderListData] = useState("");
  const [pendingAppointmentDate, setPendingAppointmentData] = useState("");
  const [selectedDay, setSelectedDay] = useState("")

  // send the login information to the backend

  const [providerAppointments, setProviderAppointments] = useState("");

  // send the login information to the backend

  const submitlogin = (email, password, history) => {
    const data = {
      email: email,
      password: password
    };
    axios
      .post(`/api/${userType}s/login`, data)
      .then(response => {
        if (!response.data.error) {

          localStorage.setItem('userInformation', JSON.stringify(response.data))
          localStorage.setItem('userType', JSON.stringify(userType))

          setUserInformation(response.data);

          history.replace("/Home");
        }
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const submitLogout = () => {
    localStorage.removeItem('userInformation');
    localStorage.removeItem('userType');

    setUserInformation(null);
    setUserType("")

  }

  //create a new account
  const submitRegister = (
    first_name,
    last_name,
    email,
    password,
    phone_number,
    address,
    lat,
    lon,
    history
  ) => {
    const data = {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      address,
      lat,
      lon
    };
    axios.post(`/api/${userType}s`, data).then(response => {
      history.replace("/login");

      console.log(response);
    });
  };

  //Update an account (now only for client, need to update to include provider)

  const updateUser = (
    id,
    first_name,
    last_name,
    email,
    password,
    phone_number,
    address
  ) => {
    const data = {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      address
    };
    axios
      .put(`/api/clients/${id}`, data)
      .then(response => {
        if (!response.data.error) {
          setUserInformation(response.data);
        }
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };
  //get all the appointments

  useEffect(() => {
    const _userInformation = localStorage.getItem('userInformation')
    setUserInformation(JSON.parse(_userInformation))

    const _userType = localStorage.getItem('userType')
    setUserType(JSON.parse(_userType))


  }, [])





  // submit date ,time and duration and get all the available appointments
  const submitDate = (time, duration, date) => {
    const data = {
      selected_startTime: time,
      selected_hours: duration,
      selectedDate: date
    };
    axios
      .post("/api/appointments", data)
      .then(response => {
        console.log("i am response", response.data);
        setProviderListData(response.data);
        setPendingAppointmentData(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const submitDay = (date) => {
    const data = {
      date
    }
    axios.post('/api/appointments/day', data)
      .then(response => {
        console.log(response)
        setProviderListData(response.data)
        setSelectedDay(response.date);
      })
      .catch(err => {
        console.log(err);
      });

  }
  const bookAppointment = (id, appointentDateData, history) => {
    const data = {
      selected_startTime: appointentDateData.selected_startTime,
      selected_hours: appointentDateData.selected_hours,
      selectedDate: appointentDateData.selectedDate,
      providerId: id,
      clientId: userInformation.id,
      clientName: userInformation.first_name
    };
    console.log(id, "i am id")
    axios.put(`/api/appointments/book/${id}`, data)
      .then(response => {
        setPendingAppointmentData({})
        history.replace("/appointments");

        // setClientAppointments({...clientAppointments, response.data})
      });
    // to get all appointments from the provider
  };

  function UpdateProviderAppointments(id) {
    axios
      .get(`/api/providers/${id}/appointments`)
      .then(response => {
        console.log("response from the get appoint provider", response.data);
        setProviderAppointments(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // create a new appointment (From the provider home page)
  const createAppointment = (time, duration, date, costPerHour, id) => {
    const data = {
      selected_startTime: time,
      selected_hours: duration,
      selected_date: date,
      costPerHour: costPerHour
    };
    console.log("Data runned for createAppointment fct", data);
    axios
      .post(`/api/providers/${id}/appointments`, data)
      .then(response => {
        console.log("response from create an appointment post!", response.data);
      })
      .catch(err => {
        console.log(err);
      });
    UpdateProviderAppointments(id);
  };

  return (
    <Router>
      <div class="Application">
        <Switch>
          <Route path="/login">
            <Login submitlogin={submitlogin} />
          </Route>
          <Route path="/register">
            <Register submitRegister={submitRegister} />
          </Route>
          <Route path="/edit-profile">
            <Header submitLogout={submitLogout} />
            <Edit userInformation={userInformation} updateUser={updateUser} />
          </Route>
          <Route path="/appointments">
            <Header submitLogout={submitLogout} />
            {userType === "client" && (
              <ClientAppointments userInformation={userInformation} />
            )}
            {userType === "provider" && (
              <ProviderAppointments userInformation={userInformation} />
            )}
          </Route>
          <Route path="/Home">
            <Header submitLogout={submitLogout} />

            {userType === "client" && <ClientHome submitDate={submitDate} providerListData={providerListData}
              pendingAppointmentDate={pendingAppointmentDate}
              bookAppointment={bookAppointment}
              submitDay={submitDay} />}
            <ProviderList
              providerListData={providerListData}
              pendingAppointmentDate={pendingAppointmentDate}
              bookAppointment={bookAppointment} />

            {userType === "provider" && (
              <ProviderHome
                createAppointment={createAppointment}
                providerAppointments={providerAppointments}
                userInformation={userInformation}
              />
            )}
          </Route>
          <Route path="/map">
            <Map1 providerListData={providerListData}
              pendingAppointmentDate={pendingAppointmentDate}
              bookAppointment={bookAppointment} />
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
