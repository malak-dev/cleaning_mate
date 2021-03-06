import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import { Link, useHistory } from 'react-router-dom';




export default function Map1(props) {
  const history = useHistory()
  const [position, setPosition] = useState([45.53, -73.57]);
  const pendingAppointmentDate = props.pendingAppointmentDate
  const providerListData = props.providerListData || [];
  const submitData = props.submitData

  return (
    <div >

      <Map center={position} zoom={13} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {providerListData.map((data) => (
          <Marker position={[data.lat, data.lon]}>
            <Popup className="list">
              <p>{data.first_name}</p>
              <p>{data.cost_per_hour}$/h</p>
              <Rater total={5} rating={data.rating} interactive={false} />
              <Link to="/appointments"></Link>
              {pendingAppointmentDate &&
                <p><button type="submit" class="btn btn-primary" onClick={() => { props.bookAppointment(data.provider_id, props.pendingAppointmentDate, history) }}>Request</button></p>
              }
            </Popup>
          </Marker>
        ))}
      </Map>

    </div>
  );
}



