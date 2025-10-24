import { Request, Response } from "express";
import {
  createOrder,
  getOrdersByUser,
  updateOrderStatus,
} from "../services/orderService";

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
};

export const getOrdersByUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId } = req.params;
    const orders = await getOrdersByUser(userId);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};

export const updateOrderStatusController = async (
  req: Request,
  res: Response
) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const order = await updateOrderStatus(orderId, status);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error });
  }
};
