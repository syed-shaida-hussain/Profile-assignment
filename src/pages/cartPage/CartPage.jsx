import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext"
import "./CartPage.css"
import CartCard from "../../components/CartCard";
const CartPage = () => {
    const {productState : {cart}} = useProducts();
    const navigate = useNavigate();
  return (
    <main>
    {cart?.length > 0 ? (
      <section className="cart-wrapper">
        {cart?.map((product) => (
            <CartCard key={product.id} product = {product}/>
        ))}
      </section>
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