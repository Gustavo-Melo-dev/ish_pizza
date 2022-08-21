import React from 'react'
import Header from '../header/Header'


const LayoutPage = (props) => {
return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default LayoutPage