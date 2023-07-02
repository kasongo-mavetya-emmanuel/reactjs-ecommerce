import { useState } from "react";
import { CartItems } from "../../components";
import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import getStripe from "../../utils/getStripe";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";

export default function Cart() {
  const { cartState }: any = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const checkoutHandler = async () => {
    try {
      if (cartState.items.length === 0) {
        toast.error("Cart is Empty");
        return;
      }
      setIsLoading(true);
      const stripe = await getStripe();

      const response = await fetch(
        "http://localhost:9999/.netlify/functions/stripe-checkout",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Content-Type, Access-Control-Allow-Headers, X-Requested-With,Access-Control-Allow-Methods,Access-Control-Allow-Origin",
            "Access-Control-Allow-Methods": "GET, POST, OPTION",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartState.items),
        }
      );

      if (response.status > 400) {
        toast.error("something went wrong try again!");

        return;
      }

      const data = await response.json();

      setIsLoading(false);

      toast.loading("Redirecting...");

      stripe?.redirectToCheckout({ sessionId: data.id });
    } catch (e) {
      toast.error("something went wrong try again!");
    }
  };
  return (
    <section>
      <CartItems />
      <div className=" right-[3rem] xl:right-[13.5rem] md:fixed pt-10 md:pt-0 bottom-[2rem]">
        <div className="flex flex-col gap-5">
          <h4 className="text-2xl font-semibold pl-11 xl:pl-0">
            Total: $ {cartState.totalAmount}
          </h4>
          <button
            className="text-white bg-black py-4 px-12 text-xl"
            onClick={checkoutHandler}
          >
            {isLoading ? (
              <Oval
                height={20}
                width={20}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#444"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              " Checkout"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
