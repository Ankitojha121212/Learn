import React from 'react'
import Product from './Product.jsx';
const productTab = () => {
    const styles = {
        display:"flex",
        flexWrap : "wrap",
    }
  return (
    <div style={styles}>
    <Product title="Dell laptop 14.5inch" description="Best product"  idx={0} />
    <Product title="Macbook" description="Premium Quality" idx={1} />
    <Product title="Loti choco Pie" description="Filled with crispy and Yummy chocolate" idx={2} />
    <Product title="Realme 9i 5G" description="18GB Ram" idx={3} />
    
    </div>
  )
}

export default productTab
