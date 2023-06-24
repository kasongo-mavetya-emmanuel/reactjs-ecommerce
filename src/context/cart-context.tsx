import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const checkItem = (product: any) => {
    const checkItem = cart.find((item: any) => item._id === product._id);

    return checkItem;
  };

  const addItem = (product: any) => {
    product.quantity = 1;
    setCart([...cart, { ...product }]);
    cart.forEach((item) => {
      setTotalPrice((prevPrice) => prevPrice + item.price * item.quantity);
    });
  };

  const increaseQuantity = (product: any) => {
    setTotalPrice(0);

    if (checkItem(product)) {
      const updatedCart: any[] = cart.map((item: any) => {
        if (item._id === product._id) {
          // setTotalPrice(
          //   (prevPrice) => prevPrice + item.price * item.quantity++
          // );
          console.log(`ssssssssssssssss`);
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          setTotalPrice((prevPrice) => prevPrice + item.price * item.quantity);
          return item;
        }
      });

      console.log(cart);

      setCart(updatedCart);
    } else {
      addItem(product);
    }
  };

  const decreaseQuantity = (product: any) => {
    setTotalPrice(0);

    if (checkItem(product)) {
      const updatedCart: any[] = cart.map((item: any) => {
        if (item._id === product._id) {
          // setTotalPrice(
          //   (prevPrice) => prevPrice + item.price * item.quantity--
          // );
          console.log(`ffffffffffffffffffffffff`);

          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          setTotalPrice((prevPrice) => prevPrice + item.price * item.quantity);
          return item;
        }
      });

      console.log(cart);

      setCart(updatedCart);
    }
  };

  // const updatedCart = cart.filter((item) => item._id !== product.id);
  // updatedCart.forEach((item) => {
  //   setTotalPrice((prevPrice) => prevPrice + item.price * product.quantity);
  // });
  // setCart(updatedCart);

  return (
    <CartContext.Provider
      value={{
        cartItems: cart,
        totalPrice: totalPrice,
        addItem: addItem,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
