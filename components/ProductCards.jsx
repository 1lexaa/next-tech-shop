import Image from "next/image";
import React from "react";

import { MdAddCircleOutline } from "react-icons/md";

const ProductCards = (props) => {
  return (
    <div className="m-6 w-[250px] max-w-xs  border rounded-lg shadow bg-[#1d1d1d] border-[#1d1d1d]  ">
      <a href="#">
        <img
          className="p-10 rounded-t-lg "
          src={props.image}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {props.title} {props.color}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5"></div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-white">{props.price} $</span>
          <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <MdAddCircleOutline size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
