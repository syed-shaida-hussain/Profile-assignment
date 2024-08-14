import { useEffect } from "react";
import axios from "axios";
import { useProducts } from "../../contexts/ProductContext";
import ProductCard from "../../components/ProductCard";
import "./ProductPage.css";

const ProductPage = () => {
    const { productState : {products} ,  dispatchProduct} = useProducts();
    const fetchProducts = async () => {
        try {
            const {data} = await axios.get('https://dummyjson.com/products?limit=16');
            const {products} = data;
            dispatchProduct({type : "FETCH_PRODUCTS" , payload : products});
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[])

  return (
    <div className="product-wrapper">
        {
            products.map((product) => <ProductCard product = {product} key ={product.id}/>)
        }
    </div>
  )
}

export default ProductPage;