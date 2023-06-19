import { Route, Routes } from "react-router-dom";
import { Home } from "./components";
import { BsCart3 } from "react-icons/bs";
import { Container } from "./components";
function App() {
  return (
    <>
      <header className="py-9">
        <Container>
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Kb</h1>
            <BsCart3 size={"2rem"} />
          </div>
        </Container>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
