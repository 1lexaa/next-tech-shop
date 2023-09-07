import mongoose from "mongoose";

const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    productImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.products ||
  mongoose.model("products", productsSchema);

// const products =
//   models.products || mongoose.model("products", userSchema);
// export default products;
