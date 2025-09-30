import { useContext } from "react";
import ProductCard from "./ProductCard";
import fetchStoreData from "../utils/fetchData";

export default function ProductList({
  category,
  products,
  setProducts,
  cartItems,
  setCartItems,
  setCategory,
}) {
  //   const products = JSON.parse(localStorage.getItem("products")) ?? [];
  console.log("Cart in ProductList: " + cartItems);
  console.log("Productlist: " + products);

  const filteredProducts =
    products && category
      ? products?.filter((item) => {
          console.log("item: " + item.category, "cat: " + category);

          if (item.category === category) return item;
        })
      : products;
  console.log(filteredProducts);

  return (
    <div className="flex flex-wrap gap-10 justify-around px-20">
      {filteredProducts &&
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartItems={cartItems}
            setCartItems={setCartItems}
            setCategory={setCategory}
          />
        ))}
    </div>
  );
}
