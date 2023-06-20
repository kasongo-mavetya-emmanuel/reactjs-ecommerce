import React, { useState } from "react";
import hero1 from "../../assets/hero/hero1.jpg";
import { GrClose } from "react-icons/gr";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function CartItems() {
  return (
    <ul className="max-w-7xl mx-auto flex flex-col gap-12">
      <li>
        <CartComponent />
      </li>
      <li>
        <CartComponent />
      </li>
      <li>
        <CartComponent />
      </li>
      <li>
        <CartComponent />
      </li>
      <li>
        <CartComponent />
      </li>
    </ul>
  );
}

const CartComponent = () => {
  let [quantity, setQuantity] = useState(1);
  return (
    <div className="flex gap-5 h-[40vh]">
      <div className="relative">
        <img src={hero1} alt="Demo" className="h-full w-[40vh] object-cover" />
        <GrClose
          style={{ position: "absolute", top: "20", left: "20" }}
          size={"1.2rem"}
        />
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <h3 className="font-semibold text-2xl">Lorem Simson</h3>
        <div>
          <h4 className="text-lg font-semibold">
            <span>Price:</span>$ 80
          </h4>
        </div>
        <div className="flex gap-5 border border-1 border-black justify-between items-center px-5 py-3">
          <AiOutlineMinus
            size={"1.2rem"}
            onClick={() => {
              setQuantity((prev) => (quantity -= 1));
            }}
          />

          <span>{quantity}</span>
          <AiOutlinePlus
            size={"1.2rem"}
            onClick={() => {
              setQuantity((prev) => (prev += 1));
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
