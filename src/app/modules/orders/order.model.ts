import { Schema, model } from "mongoose";
import { TOrder, OrderModel } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    email: { type: String, required: true, trim: true },
    productId: { type: String, ref: "Product", required: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

const Order = model<TOrder, OrderModel>("Order", orderSchema);

export default Order;
