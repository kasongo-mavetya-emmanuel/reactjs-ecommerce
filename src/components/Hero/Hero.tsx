import { useContext } from "react";
import hero1 from "../../assets/hero/hero1.webp";
import hero2 from "../../assets/hero/hero2.webp";
import ScrollContext from "../../context/scroll-context";

export default function Hero() {
  const { productsRef }: any = useContext(ScrollContext);

  const scrollHandler = () =>
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="flex lg:flex-row flex-col lg:gap-24 gap-12 px-10 xl:pr-0 lg:h-[90vh] xl:pl-[13.5rem] lg:py-5 py-3">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-bold">KasBracelet</h1>
          <p className="text-xl">Your beauty is our goal.</p>
          <button className="bg-black text-white py-3" onClick={scrollHandler}>
            Get Started
          </button>
        </div>
      </div>
      <div className="flex gap-5 flex-1">
        <div className="flex-1">
          <img
            className="h-full w-full lozad"
            data-src={hero1}
            data-placeholder-background="#b7b7b7"
            alt="man hand with a bracelet"
          />
        </div>
        <div className="flex-1/4 flex flex-col justify-center">
          <img
            data-src={hero2}
            data-placeholder-background="#b7b7b7"
            alt="woman hand with a bracelet"
            className="h-[60%] w-full lozad"
          />
        </div>
      </div>
    </section>
  );
}
