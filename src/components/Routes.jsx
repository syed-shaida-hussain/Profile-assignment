import { Route , Routes } from "react-router-dom"
import ProductPage from "../pages/productPage/ProductPage"
import CartPage from "../pages/cartPage/CartPage"

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<ProductPage />} />
        <Route path="/cart" element = {<CartPage />} />
    </Routes>
  )
}

export default MyRoutes