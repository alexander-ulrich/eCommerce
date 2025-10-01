import { useOutletContext } from "react-router";

export default async function fetchStoreData(url, setData) {
  try {
    const res = await fetch(url);

    if (!res.ok)
      throw new Error("Something went wrong fetching Data, try again!");

    const data = await res.json();
    console.log("Data from useEffect:" + data);
    localStorage.setItem("products", JSON.stringify(data));
    setData(data);
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchStoreData2() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok)
      throw new Error("Something went wrong fetching Data, try again!");

    const data = await res.json();
    console.log("Data from useEffect:" + data);
    localStorage.setItem("products", JSON.stringify(data));

    return data;
  } catch (error) {
    console.log(error.message);
  }
}
