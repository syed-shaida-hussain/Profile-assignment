import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext"

const PriceModal = () => {
    const {productState : {cart}} = useProducts();
    const navigate = useNavigate();
    const cartPrice = cart.reduce((acc,curr) => acc + curr.price * curr.quantity, 0)
    const totalCartPrice = Math.ceil(((90/ 100) * cartPrice))
  return (
    <div className="price-modal">
    <h3>Cart Summary</h3>
    <div>Price ({cart.length} items) : {cartPrice?.toLocaleString('en-US', {style: 'currency',currency: 'INR'})}</div>
    <div>Total Discounts : 10%</div>
    <div>Total Cart Price : {totalCartPrice.toLocaleString('en-US', {style: 'currency',currency: 'INR'})}</div>
    <button className="action-btn" onClick={() => navigate("/checkout")}>Checkout</button>
</div>
  )
}

export default PriceModal