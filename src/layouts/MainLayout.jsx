import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { useEffect, useLayoutEffect, useState } from "react";
import fetchStoreData, { fetchStoreData2 } from "../utils/fetchData";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  const [category, setCategory] = useState(null);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchStoreData(url, setProducts);
  }, []);

  useEffect(() => {
    let amount = 0;
    let sum = 0;
    cartItems.map((i) => {
      console.log(
        "itemPrice: " + i.price,
        "itemAmount: " + i.amount,
        "total: " + i.price * i.amount
      );
      sum += i.price * i.amount;
      amount += i.amount;
    });
    setTotalPrice(sum);
    setTotalAmount(amount);
    console.log("saved Cart to Local Storage");

    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <Navbar
        setCategory={setCategory}
        category={category}
        totalPrice={totalPrice}
        totalAmount={totalAmount}
        // cartItems={cartItems}
      />
      <Outlet
        context={{
          products,
          setProducts,
          category,
          setCategory,
          cartItems,
          setCartItems,
          totalPrice,
          setTotalPrice,
        }}
      />
      <Footer />
    </div>
  );
}
