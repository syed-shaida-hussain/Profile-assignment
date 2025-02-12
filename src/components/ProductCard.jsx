/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";
import { toast } from 'react-toastify';

const ProductCard = ({product}) => {
    const {thumbnail , title , price, id} = product;
    const { productState : {cart} , dispatchProduct} = useProducts();
    const navigate = useNavigate();
    const handleAddToCart = (product) => {
      try {
        dispatchProduct({type : "ADD_PRODUCT_TO_CART" , payload : product})
        toast.success("Product added to cart successfully")
      } catch (error) {
        toast.error(error.message)
      }
    }
  return (
    <div className="product-card flex-c">
        <img src= {thumbnail} alt="product-image" className="product-img" />
        <h3 className="product-name">{title}</h3>
        <div>{price.toLocaleString('en-US', {style: 'currency',currency: 'INR'})}</div>
        {cart.find((item) => item.id === id) ? <button className="product-btn" onClick={() => navigate("/cart")}>Go to Cart</button> : <button className="product-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>}
    </div>
  )
}

export default ProductCard