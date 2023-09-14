import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProductCards from "@/components/ProductCards";
import products from "@/models/products";
import { notFound } from "next/navigation";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
}

const Iphones = async () => {
  const data = await getData();

  const iphone = data.filter((product) => product.category === "Iphone");

  return (
    <main className="px-10">
      <Nav />
      <div className="ml-20 mt-10 flex justify-start flex-wrap ">
        {iphone.map((products) => (
          <div key={products}>
            <ProductCards
              title={products.productName}
              color={products.color}
              price={products.price}
              image={products.productImg}
            />
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Iphones;
