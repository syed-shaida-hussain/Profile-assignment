import { Route , Routes } from "react-router-dom"
import ProductPage from "../pages/productPage/ProductPage"
import CartPage from "../pages/cartPage/CartPage"
import CheckoutPage from "../pages/checkoutPage/CheckoutPage"

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<ProductPage />} />
        <Route path="/cart" element = {<CartPage />} />
        <Route path="/checkout" element = {<CheckoutPage />} />
    </Routes>
  )
}

export default MyRoutes