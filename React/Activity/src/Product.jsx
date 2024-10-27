import React from 'react'
import './Prouduct.css';
import Price from './Price';
const product = ({title,description,idx}) => {
    const oldPrices = ["12,345","234,223","234","2,342,223"]
    const newPrices = ["1,245","23,244,223","2,334","22,223"]
  return (
    <div>
      <div className='product-card'>
        <h4>Title : {title}</h4>
        <p>{description}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>
    </div>
  )
}

export default product
