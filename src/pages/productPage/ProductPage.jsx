import { useEffect, useState } from "react";
import axios from "axios";
import { useProducts } from "../../contexts/ProductContext";
import ProductCard from "../../components/ProductCard";
import "./ProductPage.css";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const ProductPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { productState : {products} ,  dispatchProduct} = useProducts();
    const fetchProducts = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.get('https://dummyjson.com/products?limit=16');
            const {products} = data;
            dispatchProduct({type : "FETCH_PRODUCTS" , payload : products});
            setIsLoading(false)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchProducts();
    },[])

  return (
    isLoading ?
    <Loader /> :
     <div className="product-wrapper flex-r flex-ctr-vt">
        {
            products.map((product) => <ProductCard product = {product} key ={product.id}/>)
        }
    </div>
  )
}

export default ProductPage;