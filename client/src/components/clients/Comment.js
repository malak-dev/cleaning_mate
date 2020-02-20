import React, { useState } from 'react';
import axios from 'axios';



export default function Comment(props) {
  const [comment, setComment] = useState("")

  const submitComment = (comment) => {
    let data = {
      rating: props.rating,
      comment,
      id: props.id
    }
    console.log(data, "i am data")
    axios.put(`/api/appointments/${props.id}`, { data })
      .then((response) => {
        console.log('i am response', response.data)
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <input
        class="form-control"
        name="comment"
        type="text"
        value={comment}
        onChange={(event) => { setComment(event.target.value) }}
      />
      <button type="submit" onClick={submitComment(comment)} class="btn btn-primary"> submit </button>
    </div>
  )
}