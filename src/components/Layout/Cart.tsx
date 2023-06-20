import { CartItems } from "../../components";

export default function Cart() {
  return (
    <section>
      <CartItems />
      <div className="right-[13.5rem] fixed bottom-[2rem]">
        <div className="flex flex-col gap-5">
          <h4 className="text-2xl font-semibold">Total: $70</h4>
          <button className="text-white bg-black py-4 px-12 text-xl">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
