import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";

export default function Hero() {
  return (
    <section className="flex gap-24  h-[90vh] pl-[13.5rem] py-5">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-bold">KasBracelet</h1>
          <p className="text-xl">Your beauty is our goal.</p>
          <button className="bg-black text-white py-3">Get Started</button>
        </div>
      </div>
      <div className="flex gap-5 flex-1">
        <div className="flex-1">
          <img
            className="h-full w-full"
            src={hero1}
            alt="man hand with a bracelet"
          />
        </div>
        <div className="flex-1/4 flex flex-col justify-center">
          <img
            src={hero2}
            alt="woman hand with a bracelet"
            className="h-[60%] w-full"
          />
        </div>
      </div>
    </section>
  );
}
