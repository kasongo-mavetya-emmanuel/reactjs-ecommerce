import hero1 from "../../assets/hero/hero1.jpg";
import { Container } from "../../components";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductsGrid() {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-14 my-16 auto-rows-auto">
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />
      </div>
    </Container>
  );
}

const ProductsGridItem = () => {
  return (
    <div className="flex flex-col gap-3">
      <img src={hero1} alt="some" className="w-full object-cover h-[20rem]" />
      <h3 className="font-semibold font-xl">Lorem Simson</h3>
      <div className="flex justify-between items-center">
        <h6 className="text-2xl font-semibold">$ 80</h6>
        <FaShoppingCart size={"1.2rem"} />
      </div>
    </div>
  );
};
