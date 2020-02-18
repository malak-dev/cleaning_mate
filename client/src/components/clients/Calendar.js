import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';


export default function Calendar(props) {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <ReactCalendar
        onChange={(date) => { setDate(date) }}
        value={date}
      />
    </div>
  )

}