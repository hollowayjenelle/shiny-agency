import React from 'react'

const Card = ({ label, title, picture }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="frelancer" height={80} width={80}></img>
      <span>{title}</span>
    </div>
  )
}

export default Card
