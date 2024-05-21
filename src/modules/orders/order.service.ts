import Order from "./order.model";
import { TOrder } from "./order.interface";

export const OrderServices = {
  createOrder: async (orderData: TOrder) => {
    const order = new Order(orderData);
    return await order.save();
  },
};
