import mongoose, { Schema, Document } from "mongoose";
import { ICart } from "../types/cartType";

export interface ICartModel extends ICart, Document {}

const cartSchema = new Schema<ICartModel>({
  userId: { type: String, required: true, unique: true },
  items: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
});

export const CartModel = mongoose.model<ICartModel>("Cart", cartSchema);
