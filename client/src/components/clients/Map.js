import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import { Link } from 'react-router-dom';


export default function Map1(props) {
  const [position, setPosition] = useState([45.53, -73.57]);

  const providerListData = props.providerListData || [];

  return (
    <div >

      <Map center={position} zoom={13} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {providerListData.map((data) => (
          <Marker position={[data.lat, data.lon]}>
            <Popup>
              <p>{data.first_name}</p>
              <p>{data.cost_per_hour}$/h</p>
              <Rater total={5} rating={data.rating} />
              <Link to="/appointments"></Link>
              <p><button type="submit" class="btn btn-primary" onClick={() => { props.bookAppointment(data.provider_id, props.pendingAppointmentDate) }}>Request</button></p>
            </Popup>
          </Marker>
        ))}
      </Map>

    </div>
  );
}



