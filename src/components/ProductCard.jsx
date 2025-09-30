import { useState } from "react";
import { useOutletContext } from "react-router";

export default function ProductCard({
  product,
  cartItems,
  setCartItems,
  setCategory,
}) {
  //   let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
  const [inCart, setInCart] = useState();
  // cart.some((item) => item.id === product.id)

  function addToCart() {
    if (!cartItems.some((el) => el.id === product.id)) {
      setCartItems([
        ...cartItems,
        { ...product, amount: 1, subtotal: product.price },
      ]);
      setInCart(true);
      if (cartItems.length > 0) setInCart(true);
      return;
    } else {
      cartItems.map((item) => {
        if (item.id === product.id) {
          const amount = item.amount + 1;
          const filteredItems = cartItems.filter((i) => i.id !== product.id);
          setCartItems(
            [
              filteredItems,
              { ...item, amount: amount, subtotal: item.price * amount },
            ].flat()
          );
          return;
        }
      });
    }
  }

  function removeFromCart() {
    if (!cartItems.some((el) => el.id === product.id)) {
      return;
    } else {
      cartItems.map((item) => {
        if (item.id === product.id) {
          const amount = item.amount;
          const filteredItems = cartItems.filter((i) => i.id !== product.id);
          if (amount > 1) {
            setCartItems(
              [
                filteredItems,
                {
                  ...item,
                  amount: amount - 1,
                  subtotal: item.price * (amount - 1),
                },
              ].flat()
            );
          } else {
            setCartItems(filteredItems);
            setInCart(false);
          }
          return;
        }
      });
    }
  }

  return (
    <div className="card bg-base-100 w-50 shadow-sm">
      <figure>
        <img
          className="object-contain aspect-square"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <p className="text-right">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(product.price)}
        </p>
        <p className="my-5">{product.category}</p>
        <div className="card-actions justify-end my-5">
          {!cartItems.some((el) => el.id === product.id) ? (
            <button onClick={addToCart} className="btn btn-primary">
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-col gap-5">
              {/* <p>
                Anzahl:
                {cartItems.filter((item) =>
                  product.id === item.id ? toString(item.amount) : 0
                )}
              </p> */}
              <div className="flex gap-5">
                <button
                  onClick={removeFromCart}
                  className="btn btn-secondary bg-red-500"
                >
                  -
                </button>
                <button
                  onClick={addToCart}
                  className="btn btn-primary bg-green-500"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
