import { CartItems } from "../../components";
import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import getStripe from "../../utils/getStripe";

export default function Cart() {
  const { cartState }: any = useContext(CartContext);

  const checkoutHandler = async () => {
    const stripe = await getStripe();

    const response = await fetch(
      "http://localhost:9999/.netlify/functions/stripe-checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartState.items),
      }
    );

    if (response.status > 400) return;

    const data = await response.json();

    stripe?.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <section>
      <CartItems />
      <div className=" right-[3rem] xl:right-[13.5rem] md:fixed pt-10 md:pt-0 bottom-[2rem]">
        <div className="flex flex-col gap-5">
          <h4 className="text-2xl font-semibold">
            Total: $ {cartState.totalAmount}
          </h4>
          <button
            className="text-white bg-black py-4 px-12 text-xl"
            onClick={checkoutHandler}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
