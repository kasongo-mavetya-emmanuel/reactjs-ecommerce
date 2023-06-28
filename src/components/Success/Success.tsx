import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ConfettiExplosion from "react-confetti-explosion";
import { BsBagCheckFill } from "react-icons/bs";

export default function Success() {
  return (
    <div className="flex flex-col h-[90vh] justify-between">
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="border border-black px-[7rem] py-[4rem] flex flex-col gap-4 items-center">
          <BsBagCheckFill size={"2rem"} color="green" />
          <h2 className="font-bold md:text-2xl xl">
            Thank You For Your Purchase
          </h2>
          <p>Check your email for the receipt</p>
          <ConfettiExplosion particleCount={200} duration={3000} force={0.9} />
          <Link to={"/"}>
            <button className="bg-black text-white px-5 py-3 font-semibold">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
