import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrder(orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    if (err.message === "Product not found") {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    if (err.message === "Insufficient quantity available in inventory") {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
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
  } catch (err: any) {
    if (err.message === "Order not found") {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
