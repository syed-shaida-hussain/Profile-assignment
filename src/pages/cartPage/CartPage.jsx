import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext"
import "./CartPage.css"
import CartCard from "../../components/CartCard";
import PriceModal from "../../components/PriceModal";
const CartPage = () => {
    const {productState : {cart}} = useProducts();
    const navigate = useNavigate();
  return (
    <main>
    {cart?.length > 0 ? (
        <div className="cart-wrapper">
            <section >
                {cart?.map((product) => (
                    <CartCard key={product.id} product = {product}/>
                ))}
            </section>
            <PriceModal />
        </div>
    ) : (
      <div className="empty-cart-message">
        <h2 className="">Your cart is feeling lonely.</h2>
        <button className="explore-btn" onClick={() => navigate("/")}>
          Explore Products
        </button>
      </div>
    )}
  </main>
  )
}

export default CartPage