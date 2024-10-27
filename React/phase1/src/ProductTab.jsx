// import React from 'react'
import Product from './Product'
// const ProductTab = () => {
//   let features = ['fast charging',"less space",'lowest price'];
//   return (
//     <div>
//       <Product title="Laptop" description="Mera h bhai laptop" features={features} />
//       <Product title="Charger" description="Nhi Dunga" features={features} />
//       <Product title="Phone" description="Mast h"features={features[0]}/>
//       <Product title="Pataka" description="Pta lenge" features={features} />
//     </div>
//   )
// }

// export default ProductTab


import React from 'react'

const ProductTab = () => {

  // const features = [<li>"fast charging"</li>,<li>"slow charging"</li>];
  const option =  ["fast charging","slow charging","large storage","521 Gb ram"];

  return (
    <div>
       <Product title="Laptop" description="Mera h bhai laptop" features={option} />
      <Product title="Charger" description="Nhi Dunga" features={option} />
    </div>
  )
}

export default ProductTab

