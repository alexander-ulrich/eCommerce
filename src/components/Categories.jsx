import { useContext } from "react";

export default function Categories({ setCategory }) {
  //   const { setCategory, products } = useContext(StoreContext);
  const products = JSON.parse(localStorage.getItem("products")) ?? [];
  console.log(products);

  const categories = [...new Set(products.map((product) => product.category))];
  function handleClick(category) {
    console.log(category);

    setCategory(category);
  }

  return (
    <div className="flex flex-wrap gap-4 my-10">
      {categories &&
        categories.map((category) => (
          <button
            className="btn btn-secondary"
            key={category}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      <button
        className="btn btn-secondary"
        key="reset"
        onClick={() => handleClick(null)}
      >
        Reset
      </button>
    </div>
  );
}
