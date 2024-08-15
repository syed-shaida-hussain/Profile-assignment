import { FaShoppingCart } from "react-icons/fa";
import { useProducts } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const {productState : {cart}} = useProducts();
  const navigate = useNavigate();
  return (
    <header className="header flex-r sp-bw flex-ctr-hr">
        <h2 className="logo" onClick={() => navigate("/")}>Fashionkart</h2>
        <div className="cart-icon-container flex-r flex-ctr-hr" onClick={() => navigate("/cart")}>
            Cart
            <FaShoppingCart />
            <span className="cart-badge flex-r flex-ctr-hr flex-ctr-vt">{cart.length}</span>
        </div>
    </header>
  )
}
