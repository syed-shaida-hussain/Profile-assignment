import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext"
import "./CartPage.css"
const CartPage = () => {
    const {productState : {cart}, dispatchProduct} = useProducts();
    const navigate = useNavigate();

    const handleRemoveFromCart = (id) => {
        dispatchProduct({type : "REMOVE_CART_ITEM" , payload : id})
    }
  return (
    <main>
    {cart?.length > 0 ? (
      <section className="cart-wrapper">
        {cart?.map(({id, thumbnail, quantity, title, price}) => (
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
                <button className="update-btn">-</button>
                {quantity}
                <button className="update-btn">+</button>
            </div>
            <button className="remove-btn" onClick={() => handleRemoveFromCart(id)} >Remove Item</button>
            </div>
          </div>
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