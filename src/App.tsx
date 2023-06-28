import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Cart, Success, NavBar } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <NavBar />
      <main>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/canceled" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
