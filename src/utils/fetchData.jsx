import { useOutletContext } from "react-router";

export default async function fetchStoreData() {
  try {
    let data = (await JSON.parse(localStorage.getItem("products"))) ?? [];

    if (data.length === 0) {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok)
        throw new Error("Something went wrong fetching Data, try again!");

      data = await res.json();

      localStorage.setItem("products", JSON.stringify(data));
    }
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
