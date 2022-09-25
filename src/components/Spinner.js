import React from 'react'
import loading from './images/loading.gif'

const Spinner = (props) => {
  return (
    <div>
      <img src={loading} alt="loading" />
      <h5>{props.text}</h5>
    </div>
  )
}

export default Spinner
