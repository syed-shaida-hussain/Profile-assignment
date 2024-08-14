import { FaShoppingCart } from "react-icons/fa";
import { useProducts } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const {productState : {cart}} = useProducts();
  const navigate = useNavigate();
  return (
    <header className="header">
        <h2 className="logo" onClick={() => navigate("/")}>Fashionkart</h2>
        <div className="cart-icon-container" onClick={() => navigate("/cart")}>
            Cart
            <FaShoppingCart />
            <span className="cart-badge">{cart.length}</span>
        </div>
    </header>
  )
}
