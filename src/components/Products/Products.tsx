import { Container } from "../../components";
import { NavLink, Route, Routes } from "react-router-dom";
import { categories } from "../../constants/constants";
import ProductsGrid from "./ProductsGrid";

const isActiveStyle = "px-8 py-4 text-white bg-black border border-black";
const isNonActiveStyle = "px-8 py-4 border border-black";

export default function Products() {
  return (
    <section className="py-20 xl:py-40 px-10 xl:px-0">
      <Container>
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
                  Art
                </NavLink>
              </li>
              {categories.slice(1).map((category) => {
                return (
                  <li key={category.id}>
                    <NavLink
                      to={`/category/${category.id}`}
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
              <Route path="/" element={<ProductsGrid />} />
              <Route path="/category/:categoryId" element={<ProductsGrid />} />
            </Routes>
          </div>
        </div>
      </Container>
    </section>
  );
}
