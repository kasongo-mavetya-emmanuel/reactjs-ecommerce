import { useEffect, useState } from "react";
import { Container, ProductsGridItem, ProductSkeleton } from "../../components";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../utils/queries";
import { client } from "../../client";
import toast from "react-hot-toast";

export default function ProductsGrid({ categories }: { categories: any[] }) {
  const { categoryId } = useParams();
  const [loadingProd, setIsLoadingProd] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setIsLoadingProd(true);

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
    } else {
      if (categories.length !== 0) {
        client
          .fetch(fetchProducts(categories[0].slug.current))
          .then((data) => {
            setProducts(data);
            setIsLoadingProd(false);
          })
          .catch((err) => {
            toast.error("something went wrong try again!");
          });
      }
    }
  }, [categoryId, categories]);

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 my-16 auto-rows-auto">
        {loadingProd
          ? [1, 2, 3, 5, 6].map((e, index) => {
              return <ProductSkeleton key={index} />;
            })
          : products.map((product, index) => (
              <ProductsGridItem key={index} product={product} />
            ))}
      </div>
    </Container>
  );
}
