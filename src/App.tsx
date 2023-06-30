import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Cart, Success, NavBar } from "./components";
import { Toaster } from "react-hot-toast";
import lozad from "lozad";

function App() {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
    // return () => {
    //   observer.disconnect();
    // };
  }, []);
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
