import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Singleproduct from "./components/SingleProduct";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<Singleproduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
