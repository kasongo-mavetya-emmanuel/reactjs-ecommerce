import React, { useState, useContext } from "react";
import hero1 from "../../assets/hero/hero1.jpg";
import { GrClose } from "react-icons/gr";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import CartContext from "../../context/cart-context";
import { urlFor } from "../../client";

export default function CartItems() {
  const { cartState }: any = useContext(CartContext);
  return (
    <ul className="max-w-7xl mx-auto flex flex-col gap-12 px-10 xl:px-0">
      {cartState.items.map((item: any, index: number) => {
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
  const { addItem, reduceItem }: any = useContext(CartContext);
  return (
    <div className="flex gap-5 flex-col md:flex-row md:h-[40vh]">
      <div className="relative">
        <img
          src={urlFor(product.image).url()}
          alt="Demo"
          className="h-[40vh] w-full md:h-full md:w-[40vh] object-cover"
        />
        <GrClose
          style={{ position: "absolute", top: "20", left: "20" }}
          size={"1.2rem"}
          onClick={() => {
            reduceItem(product);
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
              reduceItem(product);
            }}
          />

          <span>{product.quantity}</span>
          <AiOutlinePlus
            size={"1.2rem"}
            onClick={() => {
              addItem(product);
            }}
          />
        </div>
        <div>
          <h4 className="text-lg font-medium">
            SubTotal: ${product.quantity * product.price}
          </h4>
        </div>
      </div>
    </div>
  );
};
