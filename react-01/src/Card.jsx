import React from 'react'

function Card() {

    const cardStyle = `
    .card {
      background-color: lightblue;
      margin: 10px;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      height : 200%;
      font-weight: bold;
      transition: background-color 0.3s ease; /* Smooth transition */
    }

    .card:hover {
      background-color: lightskyblue; /* Change color on hover */
      cursor: pointer;
    }
  `;
       
  return (
    <>
    <style>{cardStyle}</style>
    <div className='card' >Card</div>
    </>
  )
}

export default Card