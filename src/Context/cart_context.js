import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = ()=>{
  let localCartData = localStorage.getItem("CartStorage");
  if(localCartData === []){
    return [];
  }else {
    return JSON.parse(localCartData)
  }
}

const initialState = {
  // cart: [],
  cart:getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //to clear cart

  const clearCart = ()=>{
    dispatch({ type: "CLEAR_CART"});
  };

  // to add item to local storage
  useEffect(()=>{
    localStorage.setItem("CartStorage",JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
