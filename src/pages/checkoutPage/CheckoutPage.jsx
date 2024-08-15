import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const navigate = useNavigate();
  return (
    <div className="checkout">
        <h2>Dummy checkout page.</h2>
        <p>The checkout process is successfull.</p>
        <button className="action-btn" onClick={() => navigate("/")}>Back Home</button>
    </div>
  )
}

export default CheckoutPage