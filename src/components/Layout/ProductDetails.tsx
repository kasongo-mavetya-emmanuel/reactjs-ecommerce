import { Container, Suggestions } from "..";
import { FaArrowLeft } from "react-icons/fa";
import ProductDetailsCard from "../ProductDetailsCard.tsx/ProductDetailsCard";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <article>
      <Container>
        <Link to={"/"}>
          <FaArrowLeft
            style={{
              cursor: "pointer",
            }}
            size={"1.4rem"}
          />
        </Link>
      </Container>
      <ProductDetailsCard />
      <Container>
        <h2 className="text-2xl font-bold text-center mt-16 mb-7">
          You May Also Like
        </h2>
      </Container>
      <Suggestions />
    </article>
  );
}
