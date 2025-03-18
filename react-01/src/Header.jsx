import React from 'react'

export default function Header(props) {
  return (
    <><div>Header section  {props.email} {props.phone}</div>
    
    <div>{props.headerInfo.name}</div>
    </>
  )
}


