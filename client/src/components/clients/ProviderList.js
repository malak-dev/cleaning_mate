import React, { useState } from 'react';
import Rater from 'react-rater'
import axios from 'axios'
import 'react-rater/lib/react-rater.css'
import './providerList.scss'
import { Link, useHistory } from 'react-router-dom';



export default function ProviderList(props) {
  const history = useHistory()
  const providerListData = props.providerListData || [];
  return (
    <div >
      {
        providerListData.map((data) => (
          <div key={data.first_name}>
            <p>{data.first_name}</p>
            <p>{data.cost_per_hour}$</p>
            <Rater total={5} rating={data.rating} />

            <button type="submit" class="btn btn-primary" onClick={() => { props.bookAppointment(data.provider_id, props.pendingAppointmentDate, history) }}>Request</button>
          </div>

        ))
      }
    </div>
  );
}
