import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext"
import { toast } from "react-toastify";

const PriceModal = () => {
    const {productState : {cart}, dispatchProduct} = useProducts();
    const navigate = useNavigate();
    const cartPrice = cart?.reduce((acc,curr) => acc + curr.price * curr.quantity, 0)
    const totalCartPrice = Math.ceil(((90/ 100) * cartPrice))

    const handleCheckout = () => {
        dispatchProduct({type: "CHECKOUT"})
        navigate("/checkout")
        toast.success("Checkout Succcessfull")
    }
  return (
    <div className="price-modal flex-c">
    <h3>Cart Summary</h3>
    <div>Price ({cart.length} items) : {cartPrice?.toLocaleString('en-US', {style: 'currency',currency: 'INR'})}</div>
    <div>Total Discounts : 10%</div>
    <div>Total Cart Price : {totalCartPrice.toLocaleString('en-US', {style: 'currency',currency: 'INR'})}</div>
    <button className="action-btn" onClick={() => handleCheckout()}>Checkout</button>
</div>
  )
}

export default PriceModal