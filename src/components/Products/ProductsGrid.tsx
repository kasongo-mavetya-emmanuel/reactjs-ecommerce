import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Container } from "../../components";
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../../context/cart-context";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../utils/queries";
import { client, urlFor } from "../../client";

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
        .catch((err) => console.log(`dddddddddd${err}`));
    } else {
      if (categories.length !== 0) {
        client
          .fetch(fetchProducts(categories[0].slug.current))
          .then((data) => {
            setProducts(data);
            setIsLoadingProd(false);
          })
          .catch((err) => console.log(`dddddddddd${err}`));
      }
    }
  }, [categoryId, categories]);

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 my-16 auto-rows-auto">
        {products.map((product, index) => (
          <ProductsGridItem key={index} product={product} />
        ))}
      </div>
    </Container>
  );
}

const ProductsGridItem = ({ product }: any) => {
  const { addItem }: any = useContext(CartContext);

  return (
    <div className="flex flex-col gap-3">
      <img
        src={urlFor(product.image).url()}
        alt="some"
        className="w-full object-cover h-[20rem]"
      />
      <h3 className="font-semibold font-2xl">{product.name}</h3>
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-semibold">$ {product.price}</h4>
        <FaCartPlus
          size={"1.2rem"}
          onClick={() => {
            addItem(product);
          }}
        />
      </div>
    </div>
  );
};
