import { NextResponse } from "next/server";

import products from "@/models/products";
import { connectMongoDB } from "@/lib/mongodb";
import mongoose from "mongoose";

export const GET = async (request) => {
  try {
    await connectMongoDB();
    const Products = await products.find();
    return new NextResponse(JSON.stringify(Products), { status: 200 });
  } catch (error) {
    return new NextResponse("ERROR in fetch" + error, { status: 500 });
  }
};

// export const getByCategory = async (req, res) => {
//   try {
//     const category = req.params.category;
//     const isValidCategory = mongoose.isValidObjectId;
//     if (!isValidCategory) {
//       return res.status(400);
//     }

//     const ctg = await products.findById(category);
//   } catch (error) {
//     return new NextResponse("ERROR in fetch" + error, { status: 500 });
//   }
// };
