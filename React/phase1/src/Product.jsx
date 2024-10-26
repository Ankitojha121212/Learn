import './Product.css';
const Product = ({title,description}) => {
  return (
    <>
    <div className="product" >
        <h3>Title {title} </h3>
        <p>Description :{description} </p>
    </div>
    </>
  )
}

export default Product;
