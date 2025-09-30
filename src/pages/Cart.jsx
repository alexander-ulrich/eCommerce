import { useOutletContext } from "react-router";
import ProductList from "../components/ProductList";
import CartList from "../components/CartList";

export default function Cart() {
  const { category, cartItems, setCartItems, totalPrice } = useOutletContext();
  console.dir({ cartItems });
  return (
    <div>
      <h1 className="text-4xl text-center my-5">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 my-5">
          Cart is empty.
        </div>
      ) : (
        <CartList
          cartItems={cartItems}
          setCartItems={setCartItems}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
}
