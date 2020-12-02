import React from 'react'
import { robots } from './robots'

const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='funny robot' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
