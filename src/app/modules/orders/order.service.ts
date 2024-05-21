import Order from "./order.model";
import { TOrder } from "./order.interface";
import Product from "../products/product.model";

export const OrderServices = {
  createOrder: async (orderData: TOrder) => {
    const { productId, quantity } = orderData;

    const product = await Product.findById(productId);

    if (!product) {
      throw new Error("Product not found");
    }

    // Checking if the product has enough quantity
    if (product.inventory.quantity < quantity) {
      throw new Error("Insufficient quantity available in inventory");
    }

    // Reduceing the ordered quantity from the product's inventory
    product.inventory.quantity -= quantity;

    // Updating the inStock status
    if (product.inventory.quantity === 0) {
      product.inventory.inStock = false;
    }

    await product.save();

    const order = new Order(orderData);
    return await order.save();
  },

  getAllOrdersFromDB: async () => {
    return await Order.find();
  },
  getOrdersByEmailFromDB: async (email: string) => {
    const orders = await Order.find({ email });
    if (!orders.length) {
      throw new Error("Order not found");
    }
    return orders;
  },
};
