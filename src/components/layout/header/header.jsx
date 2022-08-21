import React from 'react'
import './style.css'
import { RiFireLine } from 'react-icons/ri'

const header = () => {
  return (
    <div className="app-header">
      <header>
        <h1>
          ISH Pizza
          <span className="icon-header" >
            <RiFireLine />
          </span>
        </h1>
      </header>
    </div>
  )
}

export default header