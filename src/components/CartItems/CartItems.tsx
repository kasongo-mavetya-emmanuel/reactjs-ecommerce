import React, { useContext } from "react";
import { GrClose } from "react-icons/gr";
import CartContext from "../../context/cart-context";
import { urlFor } from "../../client";
import { Quantity } from "../../components";

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
  const { addItem, reduceItem, removeItem }: any = useContext(CartContext);
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
            removeItem(product);
          }}
        />
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <h3 className="font-bold text-2xl">{product.name}</h3>
        <div>
          <h4 className="text-lg font-bold">$ {product.price}</h4>
        </div>
        <div>
          <Quantity
            onIncrease={() => {
              addItem(product);
            }}
            onDescrease={() => {
              reduceItem(product);
            }}
            quantity={product.quantity}
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
