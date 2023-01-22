import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header";
import Explore from "./pages/explore";
import Home from "./pages/home";
import ProductDetail from "./pages/detail";
import Apparel from "./pages/apparel";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        {/* deklarasi route yang digunakan*/}
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/item/:slug" element={<ProductDetail />}></Route>
          <Route path="/apparel" element={<Apparel />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
