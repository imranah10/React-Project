import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import Clickcounter from "./components/Clickcounter";
import { Clock } from "./components/Clock";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/counterclick"} element={<Clickcounter />} />
          <Route path={"/clock"} element={<Clock />} />
        </Routes>
        <Footer / >
      </div>
    </BrowserRouter>
  );
};

export default App;
