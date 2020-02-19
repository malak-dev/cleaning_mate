import React, { useState } from 'react';



export default function Comment(props) {
  const [comment, setComment] = useState("")


  return (
    <div>
      <input
        class="form-control"
        name="comment"
        type="text"
        value={comment}
        onChange={(event) => { setComment(event.target.value) }}
      />
      <button type="submit" class="btn btn-primary"> submit </button>
    </div>
  )
}