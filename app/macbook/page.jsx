import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProductCars from "@/components/ProductCards";
import React from "react";

const Macbook = () => {
  return (
    <main className="px-10">
      <Nav />

      <div className="ml-20 mt-10 flex justify-start flex-wrap ">
        <ProductCars
          image="https://jabko.ua/image/cache/catalog/products/2023/01/191851/16-spacegray-420x420.jpg"
          title="Macbook Pro 16 M2"
          price="3000"
        />
        <ProductCars
          image="https://jabko.ua/image/cache/catalog/products/2023/01/191905/14-silver%20(1)-420x420.jpg"
          title="Macbook Pro 14 M2"
          price="2000"
        />
        <ProductCars
          image="https://jabko.ua/image/cache/catalog/products/2022/06/062308/macbook-air-midnight-gallery1-20-420x420.jpg"
          title="Macbook Air M2"
          price="1500"
        />

        <ProductCars
          image="https://jabko.ua/image/cache/catalog/products/2020/11/111144/2-2-420x420.jpg"
          title="Macbook Air M1"
          price="1000"
        />
      </div>

      <Footer />
    </main>
  );
};

export default Macbook;
