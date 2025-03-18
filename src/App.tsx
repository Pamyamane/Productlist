import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./compoents/ProductList";
import Product from "./compoents/Product";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/ProductList/:id" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
