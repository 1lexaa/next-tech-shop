import ProductCards from "@/components/ProductCards";
import products from "@/models/products";
import { notFound } from "next/navigation";
import React from "react";
import { callbackify } from "util";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
}

const Iphones = async () => {
  const data = await getData();

  return (
    <main className="ml-20 mt-10 flex justify-start flex-wrap ">
      {data.map((products) => (
        <div key={products}>
          <ProductCards
            title={products.productName}
            // color={products.color}
            price={products.price}
            image={products.productImg}
          />

          {/* <img src={products.productImg} alt="logo"></img>
          <h1>{products?.productName}</h1>
          <p>{products?.price}</p> */}
        </div>
      ))}
    </main>
  );
};

export default Iphones;
