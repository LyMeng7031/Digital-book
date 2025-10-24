import mongoose, { Schema, Document } from "mongoose";
import { ICartItem } from "../types/cartItemType";

export interface ICartItemModel extends ICartItem, Document {}

const cartItemSchema = new Schema<ICartItemModel>({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number },
  name: { type: String },
});

export const CartItemModel = mongoose.model<ICartItemModel>(
  "CartItem",
  cartItemSchema
);
