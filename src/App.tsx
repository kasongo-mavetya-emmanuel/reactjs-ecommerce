import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Cart } from "./components";
import { BsCart3 } from "react-icons/bs";
import { Container } from "./components";
import { GrClose } from "react-icons/gr";

function App() {
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <header className="py-9">
        <Container>
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Kb</h1>
            {isToggle ? (
              <GrClose
                size={"2rem"}
                onClick={() => {
                  setIsToggle(false);
                  navigate("/");
                }}
              />
            ) : (
              <BsCart3
                size={"2rem"}
                onClick={() => {
                  setIsToggle(true);
                  navigate("/cart");
                }}
              />
            )}
          </div>
        </Container>
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
