import React from 'react'
import Card from './Card'
import { robots } from './robots'

const CardList = ({ robots }) => {
  return (
    <div>
      {
        //user = each item in the array, i = the index of the item
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          )
        })
        //everything inside these {} curly braces is just javascript.
      }
    </div>
  )
}

export default CardList
