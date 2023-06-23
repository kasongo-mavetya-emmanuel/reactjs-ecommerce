import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const productInCartHandler = (product: any, quantity: number) => {
    const checkItem = cart.find((item: any) => item._id === product._id);
    setTotalPrice(0);
    if (checkItem) {
      if (quantity === 0) {
        const updatedCart = cart.filter((item) => item._id !== product.id);
        updatedCart.forEach((item) => {
          setTotalPrice((prevPrice) => prevPrice + item.price * quantity);
        });
        setCart(updatedCart);
      } else {
        const updatedCart: any[] = cart.map((item: any) => {
          if (item._id === product._id) {
            setTotalPrice((prevPrice) => prevPrice + item.price * quantity);
            return {
              ...item,
              quantity: quantity,
            };
          } else {
            setTotalPrice(
              (prevPrice) => prevPrice + item.price * item.quantity
            );
            return item;
          }
        });

        setCart(updatedCart);
      }
    } else {
      product.quantity = quantity;
      setCart([...cart, { ...product }]);
      cart.forEach((item) => {
        setTotalPrice((prevPrice) => prevPrice + item.price * quantity);
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cart,
        totalPrice: totalPrice,
        productInCartHandler: productInCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
