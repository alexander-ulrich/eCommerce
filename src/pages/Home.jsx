import { useOutletContext } from "react-router";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

export default function Home() {
  const {
    products,
    setProducts,
    category,
    setCategory,
    cartItems,
    setCartItems,
  } = useOutletContext();
  //   console.log(products);
  console.log(cartItems);
  console.log(products + " from HOME");
  //   setProducts(JSON.parse(localStorage.getItem("products")));

  return (
    <div className="flex flex-col items-center mx-20">
      <Categories setCategory={setCategory} />
      {products ? (
        <ProductList
          category={category}
          //   products={products}
          setProducts={setProducts}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ) : (
        <div />
      )}
    </div>
  );
}
