import mongoose, { Schema, Document, Types } from "mongoose";
import { IOrder } from "../types/orderType";
import { IOrderItem } from "../types/orderItemType";

export interface IOrderModel extends IOrder, Document {}

const orderSchema = new Schema<IOrderModel>(
  {
    userId: { type: String, required: true },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "OrderItem", // Reference OrderItem model
      },
    ],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model<IOrderModel>("Order", orderSchema);
