import React from 'react'

const Price = ({oldPrice,newPrice}) => {
  return (
<div className="price">
        <span>{oldPrice}</span>
        &nbsp; &nbsp; &nbsp;
        <span>{newPrice}</span>
    </div>
  )
}

export default Price
