import hero1 from "../../assets/hero/hero1.jpg";
import { Container } from "../../components";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductsGrid({ products }: { products: any[] }) {
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
  return (
    <div className="flex flex-col gap-3">
      <img src={hero1} alt="some" className="w-full object-cover h-[20rem]" />
      <h3 className="font-semibold font-2xl">{product.name}</h3>
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-semibold">$ {product.price}</h4>
        <FaShoppingCart size={"1.2rem"} />
      </div>
    </div>
  );
};
