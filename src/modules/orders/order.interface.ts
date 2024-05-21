import { Document, Model } from "mongoose";

export interface TOrder extends Document {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

export interface OrderModel extends Model<TOrder> {}
