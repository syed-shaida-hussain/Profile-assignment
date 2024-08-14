/* eslint-disable react/prop-types */
import { createContext , useContext, useReducer } from "react";

const ProductContext = createContext();

const initialProductState = {
    products : [],
    cart : []
}

const productReducer = (state , action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS" :
            return {...state, products:action.payload}
        case "ADD_PRODUCT_TO_CART" :
            return {...state , cart : [...state.cart , {...action.payload , quantity : 1}]}
        case "REMOVE_CART_ITEM" :
            return {...state , cart : state.cart.filter((item) => item.id !== action.payload)}
        case "INCREMENT_CART" :
            return {...state, cart: state.cart.map((product) => product.id === action.payload ? {...product, quantity: product.quantity + 1 } : product)}
        case "DECREMENT_CART" :
            return {...state, cart: state.cart.map((product) => product.id === action.payload ? {...product, quantity: product.quantity - 1 } : product)}
        default :
            return {...state}
    }
}

const ProductProvider = ({children}) => {
    const [productState , dispatchProduct] = useReducer( productReducer , initialProductState)
    return <ProductContext.Provider value = {{productState, dispatchProduct}} >
        {children}
    </ProductContext.Provider>
}

const useProducts = () => useContext(ProductContext)

export {ProductProvider , useProducts }