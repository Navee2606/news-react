import React from 'react'

/*function Inventory(props) {
  return (
    <div>
        <h1>inventory</h1>
        <p>My wieght is {props.size}</p>
        <p> My name is {props.person.name}</p>


    </div>

  )*/
   function Inventory({size,person}) {
    return (
      <div>
          <h1>inventory</h1>
          <p>My wieght is {size}</p>
          <p> My name is {person.name} my role is {person.role}</p>
  
  
      </div>
  
    )
}

export default Inventory