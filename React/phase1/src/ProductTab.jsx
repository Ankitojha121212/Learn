import React from 'react'
import Product from './Product'
const ProductTab = () => {
  let features = ['fast charging',"less space",'lowest price'];
  return (
    <div>
      <Product title="Laptop" description="Mera h bhai laptop" features={features} />
      <Product title="Charger" description="Nhi Dunga" features={features} />
      <Product title="Phone" description="Mast h" />
      <Product title="Pataka" description="Pta lenge" features={features} />
    </div>
  )
}

export default ProductTab
