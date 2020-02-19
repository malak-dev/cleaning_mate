import React, { useState } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


export default function ProviderList(props) {
  return (
    <div>
      <div>
        <p>name</p>
        <p>cost per hour</p>
        <Rater total={5} rating={2} />
        <button type="submit" class="btn btn-primary">Requset</button>

      </div>
    </div>
  )
}