import React, { useState } from 'react'

const State1 = () => {
    const [name,setName]=useState("Ala Eddine")
    const [age,setAge]=useState("23 ans")

  return (
    <div>
        {name}
        {age}
        <button onClick={() =>{ 
            setName("Autre Prénom")
            setAge("20 ans")
            }}> Change </button>

    </div>
  )
}

export default State1