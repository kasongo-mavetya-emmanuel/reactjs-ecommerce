import { useState, useContext, useCallback, useEffect } from "react";
import { Container, Quantity } from "..";
import toast from "react-hot-toast";
import lozad from "lozad";
import { client, urlFor } from "../../client";
import CartContext from "../../context/cart-context";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../utils/queries";
import Skeleton from "react-loading-skeleton";

export default function ProductDetailsCard() {
  const [quantity, setQuantity] = useState(1);
  const { addItem }: any = useContext(CartContext);
  const [product, setProduct] = useState<any>();

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
          console.log(data[0]);
          setProduct(data[0]);
          setIsLoadingProd(false);
        })
        .catch((err) => {
          toast.error("Failed to load product!");
        });
    }
  }, [productId]);

  useEffect(() => {
    const observer = lozad();
    observer.observe();
    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  return (
    <Container>
      <div className="flex justify-center">
        <div className="flex gap-20 flex-col md:flex-row ">
          <div>
            {loadingProd ? (
              <Skeleton height={"70vh"} width={"45vh"} />
            ) : (
              <img
                data-src={urlFor(product.image).url()}
                data-placeholder-background="#b7b7b7"
                alt="product"
                className="h-[50vh] w-full md:h-full md:w-[60vh] object-cover lozad"
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
              <div className="flex gap-9">
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
                  <button className="text-white bg-black py-5 px-9">
                    Checkout
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
