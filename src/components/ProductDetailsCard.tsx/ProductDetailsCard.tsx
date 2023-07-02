import { useState, useContext, useCallback, useEffect } from "react";
import { Container, Quantity } from "..";
import toast from "react-hot-toast";
import { client, urlFor } from "../../client";
import CartContext from "../../context/cart-context";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../utils/queries";
import Skeleton from "react-loading-skeleton";
import getStripe from "../../utils/getStripe";
import { Oval } from "react-loader-spinner";

export default function ProductDetailsCard() {
  const [quantity, setQuantity] = useState(1);
  const { addItem }: any = useContext(CartContext);
  const [product, setProduct] = useState<any>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addToCartHandler = useCallback(() => {
    addItem(product);
    toast.success(`${product.name} added`);
  }, [addItem, product]);

  const { productId } = useParams();
  const [loadingProd, setIsLoadingProd] = useState(true);

  useEffect(() => {
    setIsLoadingProd(true);
    if (productId) {
      client
        .fetch(fetchProduct(productId))
        .then((data) => {
          setProduct(data[0]);
          setIsLoadingProd(false);
        })
        .catch((err) => {
          toast.error("Failed to load product!");
        });
    }
  }, [productId]);

  const checkoutHandler = useCallback(async () => {
    try {
      if (quantity === 0) {
        toast.error("Quantity cannot be 0");
        return;
      }

      setIsSubmitting(true);
      const stripe = await getStripe();

      const response = await fetch(
        "https://kasbracelets.netlify.app/.netlify/functions/stripe-checkout",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Content-Type, Access-Control-Allow-Headers, X-Requested-With,Access-Control-Allow-Methods,Access-Control-Allow-Origin",
            "Access-Control-Allow-Methods": "GET, POST, OPTION",
            "Content-Type": "application/json",
          },
          body: JSON.stringify([{ ...product, quantity: quantity }]),
        }
      );

      if (response.status > 400) {
        setIsSubmitting(false);
        toast.error("something went wrong try again!");

        return;
      }

      const data = await response.json();

      setIsSubmitting(false);

      toast.loading("Redirecting...");

      stripe?.redirectToCheckout({ sessionId: data.id });
    } catch (e) {
      toast.error("something went wrong try again!");
    }
  }, [product, quantity]);
  return (
    <Container>
      <div className="flex justify-center px-11 xl:px-0">
        <div className="flex gap-20 flex-col md:flex-row ">
          <div>
            {loadingProd ? (
              <Skeleton height={"70vh"} width={"45vh"} />
            ) : (
              <img
                src={urlFor(product.image).url()}
                alt="product"
                className="h-[60vh] w-full md:h-[60vh] md:w-[60vh] object-cover"
              />
            )}
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-2xl">
                {loadingProd ? <Skeleton /> : product.name}{" "}
              </h1>
              <div>
                <h3 className="font-medium">
                  {loadingProd ? <Skeleton /> : "Details :"}
                </h3>
                <p>{loadingProd ? <Skeleton /> : product.description} </p>
              </div>
              <h3 className="font-bold">
                {loadingProd ? <Skeleton /> : `$ ${product.price}`}{" "}
              </h3>
              <div>
                <h3 className="font-medium">
                  {loadingProd ? <Skeleton /> : "Quantity :"}
                </h3>

                {loadingProd ? (
                  <Skeleton height={"3rem"} width={"10rem"} />
                ) : (
                  <Quantity
                    onIncrease={() => {
                      setQuantity((prevQ) => prevQ + 1);
                    }}
                    onDescrease={() => {
                      if (quantity > 0) {
                        setQuantity((prevQ) => prevQ - 1);
                      }
                    }}
                    quantity={quantity}
                  />
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-9">
                {loadingProd ? (
                  <Skeleton height={"5rem"} width={"10rem"} />
                ) : (
                  <button
                    className="border border-black py-5 px-7"
                    onClick={addToCartHandler}
                  >
                    Add To Cart
                  </button>
                )}
                {loadingProd ? (
                  <Skeleton height={"5rem"} width={"10rem"} />
                ) : (
                  <button
                    className="text-white bg-black py-5 px-9 text-center"
                    onClick={checkoutHandler}
                  >
                    {isSubmitting ? (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
