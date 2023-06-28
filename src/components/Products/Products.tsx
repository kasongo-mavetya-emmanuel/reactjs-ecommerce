import { useEffect, useState } from "react";
import { Container } from "../../components";
import { NavLink, Route, Routes } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import { fetchCategories } from "../../utils/queries";
import { client } from "../../client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const isActiveStyle = "px-8 py-4 text-white bg-black border border-black";
const isNonActiveStyle = "px-8 py-4 border border-black";

export default function Products() {
  const [loadingCat, setIsLoadingCat] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    setIsLoadingCat(true);
    client
      .fetch(fetchCategories())
      .then((data) => {
        setCategories(data);
        setIsLoadingCat(false);
      })
      .catch((err) => console.log(`dddddddddd${err}`));
  }, []);

  return (
    <section className="py-20 xl:py-40 px-10 xl:px-0">
      <Container>
        <div>
          <div className="flex flex-col lg:flex-row gap-7">
            <h2 className="text-4xl font-semibold">Products</h2>
            {loadingCat ? (
              <SkeletonTheme width={"4rem"} height={"3rem"}>
                <div className="flex">
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
              </SkeletonTheme>
            ) : (
              <ul className="flex md:items-center">
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isActive ? isActiveStyle : isNonActiveStyle
                    }
                  >
                    {categories[0]?.name}
                  </NavLink>
                </li>
                {categories.slice(1).map((category, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={`/category/${category?.slug.current}`}
                        className={({ isActive, isPending }) =>
                          isActive ? isActiveStyle : isNonActiveStyle
                        }
                      >
                        {category?.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div>
            <Routes>
              <Route
                path="/"
                element={<ProductsGrid categories={categories} />}
              />
              <Route
                path="/category/:categoryId"
                element={<ProductsGrid categories={categories} />}
              />
            </Routes>
          </div>
        </div>
      </Container>
    </section>
  );
}
