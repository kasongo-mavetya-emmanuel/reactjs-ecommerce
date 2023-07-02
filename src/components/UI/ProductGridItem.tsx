import { useContext, useEffect } from "react";
import CartContext from "../../context/cart-context";
import { urlFor } from "../../client";
import { FaCartPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import lozad from "lozad";
import hero1 from "../../assets/hero/hero1.webp";
import { useNavigate } from "react-router-dom";

const ProductsGridItem = ({ product }: any) => {
  const navigate = useNavigate();
  const { addItem }: any = useContext(CartContext);
  useEffect(() => {
    const observer = lozad();
    observer.observe();
    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  const goToProducHandler = () => {
    navigate(
      `/product/${product.category.slug.current}/${product.slug.current}`
    );
  };

  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <img
        data-src={urlFor(product.image).url()}
        data-placeholder-background="#b7b7b7"
        alt="some"
        className="w-full object-cover h-[20rem] hover:scale-110 ease-in duration-300 cursor-pointer lozad"
        onClick={goToProducHandler}
      />
      <h3 className="font-semibold font-2xl">{product.name}</h3>
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-semibold">$ {product.price}</h4>
        <FaCartPlus
          size={"1.2rem"}
          scale={"2"}
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            addItem(product);
            toast.success(`${product.name} added`);
          }}
        />
      </div>
    </div>
  );
};

export default ProductsGridItem;
