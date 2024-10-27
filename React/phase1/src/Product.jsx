import './Product.css';
const Product = ({title,description,features}) => {

  return (
    <>
    <div className="product" >
        <h3>Title {title} </h3>
        <p>Description :{description} </p>
        <p>Features :{features.map((feature)=>(
          <li>{feature}</li>
        ))} </p>
    </div>
    </>
  )
}

export default Product;
