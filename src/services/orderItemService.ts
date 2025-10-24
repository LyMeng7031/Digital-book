import { OrderItemModel } from "../models/orderItemModel";
import { IOrderItem } from "../types/orderItemType";

// Create a new order item
export const createOrderItem = async (item: IOrderItem) => {
  const newItem = await OrderItemModel.create(item);
  return newItem;
};

// Update quantity or price of an order item
export const updateOrderItem = async (
  itemId: string,
  data: Partial<IOrderItem>
) => {
  const item = await OrderItemModel.findById(itemId);
  if (!item) throw new Error("OrderItem not found");
  Object.assign(item, data);
  await item.save();
  return item;
};

// Delete an order item
export const deleteOrderItem = async (itemId: string) => {
  const item = await OrderItemModel.findByIdAndDelete(itemId);
  return item;
};
