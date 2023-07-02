import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../client";
import { fetchProducts } from "../../utils/queries";
import toast from "react-hot-toast";
import classes from "./Suggestions.module.css";
import { ProductSkeleton, ProductsGridItem } from "..";

export default function Suggestions() {
  const { categoryId } = useParams();
  const [loadingProd, setIsLoadingProd] = useState(true);

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
    <div className={`${classes["marquee"]}`}>
      {loadingProd ? (
        <div
          className={`${classes["maylike-products-container"]} ${classes["track"]}`}
        >
          <div className="flex gap-5">
            {[1, 2, 3, 4, 5].map((e, index) => (
              <div key={index} className="w-[20rem]">
                <ProductSkeleton />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`${classes["maylike-products-container"]} ${classes["track"]}`}
        >
          {products.map((e, index) => (
            <ProductsGridItem key={index} product={e} />
          ))}
        </div>
      )}
    </div>
  );
}
