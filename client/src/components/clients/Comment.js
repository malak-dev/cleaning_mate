import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Comment(props) {
  const [comment, setComment] = useState("")
  const getClientAppointments = props.getClientAppointments
  const userInformation = props.userInformation
  console.log(userInformation, "iam userinfo")



  const submitComment = (comment) => {
    let data = {
      rating: props.rating,
      comment,
      id: props.id
    }

    return axios.put(`/api/appointments/${props.id}`, data)
      .then((response) => {

        const { rating, comment } = response.data[0]

        console.log(rating, comment, "kkkkkk")

      }).catch((err) => {
        console.log(err)
      })
      .then((res) => {
        getClientAppointments(userInformation.id)

      })
  }

  return (
    <div>
      <td> <input
        class="form-control"
        name="comment"
        type="text"
        value={comment}
        onChange={(event) => { setComment(event.target.value) }}
      /></td>
      <td><button type="submit" onClick={() => submitComment(comment)} class="btn btn-primary"> submit </button></td>
    </div >
  )
}