import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { orderSchema } from "./order.validation";
import { TOrder } from "./order.interface";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    // Data validation using Zod
    const zodParsedData = orderSchema.parse(orderData);

    // Assert type to TOrder
    const validatedOrderData = zodParsedData as TOrder;

    const result = await OrderServices.createOrder(validatedOrderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    const error = err as Error;
    if (error.message === "Product not found") {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    if (error.message === "Insufficient quantity available in inventory") {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    let orders;

    if (email) {
      orders = await OrderServices.getOrdersByEmailFromDB(email as string);
    } else {
      orders = await OrderServices.getAllOrdersFromDB();
    }

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: orders,
    });
  } catch (err) {
    const error = err as Error;
    if (error.message === "Order not found") {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
