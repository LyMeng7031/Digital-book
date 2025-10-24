import mongoose, { Schema, Document } from "mongoose";
import { IOrderItem } from "../types/orderItemType";

export interface IOrderItemModel extends IOrderItem, Document {}

const orderItemSchema = new Schema<IOrderItemModel>({
  productId: { type: String, required: true },
  name: { type: String },
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
});

export const OrderItemModel = mongoose.model<IOrderItemModel>(
  "OrderItem",
  orderItemSchema
);
