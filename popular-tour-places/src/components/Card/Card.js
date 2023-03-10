import React from 'react'
import './Card.scss'

function Card(props) {
  return (
    <div className='cards'>
      
      <div className='title'>
        <h1>{props.location.title}</h1>
      </div>
      <img src={props.location.image} alt=''/>
      <div className='description'>
      <p>
      {props.location.desc}
      </p>
      </div>
    </div>
  )
}

export default Card;