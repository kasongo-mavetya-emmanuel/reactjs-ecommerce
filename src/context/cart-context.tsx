import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState([]);
  const addProduct = (product: any) => {
    const checkItem = cart.find((item) => item._id === product._id);
  };
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
