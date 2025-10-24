import { CartItemModel } from "../models/cartItemModel";
import { ICartItem } from "../types/cartItemType";

// Create a new cart item
export const createCartItem = async (item: ICartItem) => {
  const newItem = await CartItemModel.create(item);
  return newItem;
};

// Update quantity of a cart item
export const updateCartItemQuantity = async (
  itemId: string,
  quantity: number
) => {
  const item = await CartItemModel.findById(itemId);
  if (!item) throw new Error("CartItem not found");
  item.quantity = quantity;
  await item.save();
  return item;
};
