import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
