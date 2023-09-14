"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

import ProductCard from "@/components/ProductCards";
import Nav from "@/components/Nav";
import React from "react";


export default function HomePage() {
  return (
    <main className="px-10 ">
      <Nav />

      <Banner />

      <h1 className="text-center  text-3xl font-semibold">MOST POPULAR</h1>
      <div className="ml-20 mt-10 flex justify-start flex-wrap ">
        <ProductCard
          image="https://jabko.ua/image/cache/catalog/products/2022/09/072253/photo_2022-09-07_22-53-30%20(1)-300x300.jpg"
          title="IPHONE 14 PRO MAX"
          price="1200"
        />
        <ProductCard
          image="https://jabko.ua/image/cache/catalog/products/2022/09/072342/MQD83%20(1)-300x300.jpg"
          title="AIRPODS PRO"
          price="250"
        />
        <ProductCard
          image="https://jabko.ua/image/cache/catalog/products/2022/06/201902/mbp14-spacegray-gallery1-202110-300x300.jpg"
          title="MACBOOK PRO 14"
          price="2000"
        />
        <ProductCard
          image="https://jabko.ua/image/cache/catalog/products/2022/09/081730/MPLT3ref_VW_34FR%20watch-45-alum-m-300x300.jpg"
          title="APPLE WATCH 8"
          price="450"
        />
      </div>
      <Footer />
    </main>
  );
}
