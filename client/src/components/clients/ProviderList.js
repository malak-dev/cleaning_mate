import React, { useState } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './providerList.scss'


export default function ProviderList(props) {
  const providerListData = props.providerListData || [];
  return (
    <div >
      {
        providerListData.map((data) => (
          <div key={data.first_name}>
            <p>{data.first_name}</p>
            <p>{data.cost_per_hour}$</p>
            <Rater total={5} rating={data.rating} />
            <button type="submit" class="btn btn-primary">Requset</button>
          </div>

        ))
      }
    </div>

  )
}