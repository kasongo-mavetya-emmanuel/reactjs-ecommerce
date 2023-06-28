import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "..";
import { GrClose } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import CartContext from "../../context/cart-context";

export default function NavBar() {
  const { cartState }: any = useContext(CartContext);
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);
  return (
    <header className="py-9">
      <Container>
        <div className="flex justify-between px-10 xl:px-0">
          <h1 className="text-4xl font-bold">Kb</h1>
          {isToggle ? (
            <GrClose
              size={"2rem"}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
                setIsToggle(false);
              }}
            />
          ) : (
            <div className="relative">
              <BsCart3
                size={"2rem"}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/cart");
                  setIsToggle(true);
                }}
              />
              <span className="absolute h-[1.6rem] w-[1.6rem] flex col justify-center items-center font-semibold text-white -right-3 -top-3 py-1 px-1 rounded-full bg-[#ff0000]">
                {cartState.items.length}
              </span>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
