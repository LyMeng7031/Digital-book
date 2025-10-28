import { OrderModel } from "../models/orderModel";
import { IOrder } from "../types/orderType";

// Create a new order
export const createOrder = async (orderData: IOrder) => {
  const order = await OrderModel.create(orderData);
  return order;
};

// Get orders by user
export const getOrdersByUser = async (userId: string) => {
  return OrderModel.find({ userId });
};

// Update order status
export const updateOrderStatus = async (
  orderId: string,
  status: IOrder["status"]
) => {
  const order = await OrderModel.findById(orderId);
  if (!order) throw new Error("Order not found");
  order.status = status;
  await order.save();
  return order;
};
export const deleteOrder = async (orderId: string) => {
  const order = await OrderModel.findByIdAndDelete(orderId);
  return order;
};
