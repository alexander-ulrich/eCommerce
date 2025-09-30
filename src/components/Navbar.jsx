import { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router";

export default function Navbar({
  setCategory,
  category,
  totalPrice,
  totalAmount,
}) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) ?? [];
  //   const [sum, setSum] = useState(0);
  console.log("From Navbar: " + cartItems[0]);
  //   let sum = 0;
  //   cartItems.map(
  //     (i) => {
  //       console.log(
  //         "itemPrice: " + i.price,
  //         "itemAmount: " + i.amount,
  //         "total: " + i.price * i.amount
  //       );
  //       sum += i.price * i.amount;
  //       // setSum((prev) => prev + i.price * i.amount);
  //     }
  //     //   useEffect(() => {});
  //     // },
  //     // [cartItems]
  //   );
  console.log("TOTAL: " + totalPrice);

  function handleClick() {
    setCategory(null);
    console.log(category);
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <NavLink
          to="/"
          onMouseDown={handleClick}
          className="btn btn-ghost text-xl"
        >
          eCommerce
        </NavLink>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item">
                {totalAmount}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {cartItems.length} Items
              </span>
              <span className="text-info">
                {/* {cartItems */}
                {/* ?  */}
                {
                  new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(cartItems ? totalPrice : 0)
                  //   : new Intl.NumberFormat("de-DE", {
                  //       style: "currency",
                  //       currency: "EUR",
                  //     }).format(0)}
                }
              </span>
              <div className="card-actions">
                <NavLink to="/cart" className="btn btn-primary btn-block">
                  View cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
