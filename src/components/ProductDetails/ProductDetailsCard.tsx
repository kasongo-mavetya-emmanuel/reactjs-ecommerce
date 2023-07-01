import { useState, useContext, useCallback } from "react";
import hero1 from "../../assets/hero/hero1.webp";
import { Container, Quantity } from "..";
import CartContext from "../../context/cart-context";
import toast from "react-hot-toast";

export default function ProductDetailsCard({ product }: any) {
  const [quantity, setQuantity] = useState(1);
  const { addItem }: any = useContext(CartContext);
  const addToCartHandler = useCallback(() => {
    addItem(product);
    toast.success(`${product.name} added`);
  }, [addItem, product]);

  return (
    <Container>
      <div className="flex justify-center">
        <div className="flex gap-20 flex-col md:flex-row ">
          <div>
            <img
              src={hero1}
              alt="product"
              className="h-[50vh] w-full md:h-full md:w-[60vh] object-cover"
            />
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-2xl">Product name</h1>
              <div>
                <h3 className="font-medium">Details :</h3>
                <p>Product description</p>
              </div>
              <h3 className="font-bold">$ 99</h3>
              <div>
                <h3 className="font-medium">Quantity :</h3>
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
              </div>
              <div className="flex gap-9">
                <button
                  className="border border-black py-5 px-7"
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </button>
                <button className="text-white bg-black py-5 px-9">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
