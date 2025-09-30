export default function CartList({ cartItems, setCartItems, totalPrice }) {
  function addToCart(product) {
    if (!cartItems.some((el) => el.id === product.id)) {
      setCartItems([
        ...cartItems,
        { ...product, amount: 1, subtotal: item.price },
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

  function removeFromCart(product) {
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
    <ul className="list bg-base-100 rounded-box shadow-md px-20">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Your Shopping Cart
      </li>
      {cartItems &&
        cartItems?.map((item) => {
          return (
            <li key={item.id} className="list-row">
              <div>
                <img className="size-10 rounded-box" src={item.image} />
              </div>
              <div>
                <div>{item.title}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {"Amount: " + item.amount}
                </div>
              </div>
              <p className="list-col-wrap text-xs">{item.description}</p>
              <button
                onMouseDown={() => removeFromCart(item)}
                className="btn btn-square btn-ghost"
              >
                -
              </button>
              <button
                onMouseDown={() => addToCart(item)}
                className="btn btn-square btn-ghost"
              >
                +
              </button>
              <div>
                <p>
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(item.subtotal)}
                </p>
              </div>
            </li>
          );
        })}
      {cartItems && (
        <li className="flex gap-15 justify-end p-4 pb-2 text-lg text-right opacity-60 tracking-wide mr-5 my-5">
          <span>
            Total Cost:{" "}
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(totalPrice)}
          </span>
          <button className="btn btn-primary">Checkout</button>
        </li>
      )}
    </ul>
  );
}
