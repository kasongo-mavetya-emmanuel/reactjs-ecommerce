import React, { useState, useContext } from "react";
import hero1 from "../../assets/hero/hero1.jpg";
import { GrClose } from "react-icons/gr";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import CartContext from "../../context/cart-context";

export default function CartItems() {
  const { cartItems }: any = useContext(CartContext);
  return (
    <ul className="max-w-7xl mx-auto flex flex-col gap-12 px-10 xl:px-0">
      {cartItems.map((item: any, index: number) => {
        return (
          <li key={index}>
            <CartComponent product={item} />
          </li>
        );
      })}
    </ul>
  );
}

const CartComponent = ({ product }: any) => {
  const { productInCartHandler }: any = useContext(CartContext);
  let [quantity, setQuantity] = useState(1);
  return (
    <div className="flex gap-5 flex-col md:flex-row md:h-[40vh]">
      <div className="relative">
        <img
          src={hero1}
          alt="Demo"
          className="h-[40vh] w-full md:h-full md:w-[40vh] object-cover"
        />
        <GrClose
          style={{ position: "absolute", top: "20", left: "20" }}
          size={"1.2rem"}
          onClick={() => {
            productInCartHandler(product, 0);
          }}
        />
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <h3 className="font-semibold text-2xl">Lorem Simson</h3>
        <div>
          <h4 className="text-lg font-semibold">
            <span>Price:</span>$ {product.price}
          </h4>
        </div>
        <div className="flex gap-5 border border-1 border-black justify-between items-center px-5 py-3">
          <AiOutlineMinus
            size={"1.2rem"}
            onClick={() => {
              setQuantity((prev) => (quantity -= 1));
              productInCartHandler(product, quantity);
            }}
          />

          <span>{quantity}</span>
          <AiOutlinePlus
            size={"1.2rem"}
            onClick={() => {
              setQuantity((prev) => (prev += 1));
              productInCartHandler(product, quantity);
            }}
          />
        </div>
        <div>
          <h4 className="text-lg font-medium">SubTotal: $80</h4>
        </div>
      </div>
    </div>
  );
};
