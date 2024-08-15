/* eslint-disable react/prop-types */
import { useProducts } from "../contexts/ProductContext";

const CartCard = ({product}) => {
    const {id, thumbnail, price, title, quantity} = product;
    const {dispatchProduct} = useProducts();

    const handleRemoveFromCart = (id) => {
        dispatchProduct({type : "REMOVE_CART_ITEM" , payload : id})
    }

    const handleIncrementCart = (product) => {
        dispatchProduct({type : "INCREMENT_CART" , payload : product.id})
    }

    const handleDecrementCart = (product) => {
        product.quantity <= 1 ? dispatchProduct({type : "REMOVE_CART_ITEM" , payload : id}) : dispatchProduct({type : "DECREMENT_CART" , payload : product.id})
    }

  return (
    <div key={id} className="cart-card">
    <div className="flex">
    <img src= {thumbnail} alt="cart-image" className="cart-img flex-center" />
    <div className="item-details-wrapper">
        <h3 className="cart-product-name flex-center">{title}</h3>
        <div className="price flex-center">{price.toLocaleString('en-US', {style: 'currency',currency: 'INR'})}</div>
    </div>
    </div>
    <div className="flex flex-end">
    <div className="quantity flex-center">
        <button className="update-btn" onClick={() => handleDecrementCart(product)}>-</button>
        {quantity}
        <button className="update-btn" onClick={() => handleIncrementCart(product)}>+</button>
    </div>
    <button className="action-btn" onClick={() => handleRemoveFromCart(id)} >Remove Item</button>
    </div>
  </div>
  )
}

export default CartCard