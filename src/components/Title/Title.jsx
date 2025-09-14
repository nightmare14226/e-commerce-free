import React from 'react'

import "./title.scss"

function Title(props) {
  return (
    <div className='image'>
        <img src={props.headingimg} alt="Page image" className="title__img" />
        <h1 className='image__text'>Shopping Cart</h1>
    </div>
  )
}

export default Title