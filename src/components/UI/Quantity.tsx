import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Quantity({ onIncrease, onDescrease, quantity }: any) {
  return (
    <div className="inline-flex gap-7 border border-black items-center px-5 py-3">
      <AiOutlineMinus
        style={{
          cursor: "pointer",
        }}
        size={"1.2rem"}
        onClick={onDescrease}
      />
      <span>{quantity}</span>
      <AiOutlinePlus
        style={{
          cursor: "pointer",
        }}
        size={"1.2rem"}
        onClick={onIncrease}
      />
    </div>
  );
}
