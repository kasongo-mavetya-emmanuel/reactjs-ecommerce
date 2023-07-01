import { useEffect, useState } from "react";
import { Container, ProductsGridItem } from "..";
import { FaArrowLeft } from "react-icons/fa";
import ProductDetailsCard from "./ProductDetailsCard";
import { client } from "../../client";
import { fetchProducts } from "../../utils/queries";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

export default function ProductDetails({ product }: any) {
  return (
    <article>
      <Container>
        <FaArrowLeft
          style={{
            cursor: "pointer",
          }}
          size={"1.4rem"}
        />
      </Container>
      <ProductDetailsCard product={product} />

      <Container>
        <h2 className="text-2xl font-bold text-center mt-16 mb-7">
          You May Also Like
        </h2>
      </Container>
      <Suggestions />
    </article>
  );
}

function Suggestions() {
  const { categoryId } = useParams();
  const [loadingProd, setIsLoadingProd] = useState(false);

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (categoryId) {
      client
        .fetch(fetchProducts(categoryId))
        .then((data) => {
          setProducts(data);

          setIsLoadingProd(false);
        })
        .catch((err) => {
          toast.error("Failed to load products!");
        });
    }
  }, [categoryId]);
  return (
    <div className="relative w-full overflow-hidden">
      <div className={`flex gap-5 ${classes["track"]}`}>
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />
      </div>
    </div>
  );
}
