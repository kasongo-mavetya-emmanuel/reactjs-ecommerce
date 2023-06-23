import { useEffect, useState } from "react";
import { Container } from "../../components";
import { NavLink, Route, Routes } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import { fetchCategories, fetchProducts } from "../../utils/queries";
import { client } from "../../client";
import { useParams } from "react-router-dom";

const isActiveStyle = "px-8 py-4 text-white bg-black border border-black";
const isNonActiveStyle = "px-8 py-4 border border-black";

export default function Products() {
  const { categoryId } = useParams();
  const [loadingCat, setIsLoadingCat] = useState(false);
  const [loadingProd, setIsLoadingProd] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setIsLoadingCat(true);
    client
      .fetch(fetchCategories())
      .then((data) => {
        console.log(data);
        setCategories(data);
        setIsLoadingCat(false);
      })
      .catch((err) => console.log(`dddddddddd${err}`));
  }, []);

  useEffect(() => {
    setIsLoadingProd(true);
    if (categoryId) {
      client
        .fetch(fetchProducts(categoryId))
        .then((data) => {
          console.log(data);
          setProducts(data);
          setIsLoadingProd(false);
        })
        .catch((err) => console.log(`dddddddddd${err}`));
    }

    if (categories.length !== 0) {
      client
        .fetch(fetchProducts(categories[0].slug.current))
        .then((data) => {
          console.log(data);
          setProducts(data);
          setIsLoadingProd(false);
        })
        .catch((err) => console.log(`dddddddddd${err}`));
    }
  }, [categories, categoryId]);
  return (
    <section className="py-20 xl:py-40 px-10 xl:px-0">
      {/* <Container>
        <div>
          <div className="flex flex-col lg:flex-row gap-7">
            <h2 className="text-4xl font-semibold">Products</h2>
            <ul className="flex md:items-center">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isActive ? isActiveStyle : isNonActiveStyle
                  }
                >
                  {categories[0].name}
                </NavLink>
              </li>
              {categories.slice(1).map((category) => {
                return (
                  <li key={category.slug}>
                    <NavLink
                      to={`/category/${category.slug}`}
                      className={({ isActive, isPending }) =>
                        isActive ? isActiveStyle : isNonActiveStyle
                      }
                    >
                      {category.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<ProductsGrid products={products} />} />
              <Route
                path="/category/:categoryId"
                element={<div></div>}
                // element={<ProductsGrid products={products} />}
              />
            </Routes>
          </div>
        </div>
      </Container> */}
    </section>
  );
}
