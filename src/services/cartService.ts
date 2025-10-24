import { CartModel } from "../models/cartModel";
import { ICartItem } from "../types/cartType";

// Add item to cart
export const addItemToCart = async (userId: string, item: ICartItem) => {
  let cart = await CartModel.findOne({ userId });
  if (!cart) {
    cart = await CartModel.create({ userId, items: [item] });
  } else {
    const existingItem = cart.items.find((i) => i.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.items.push(item);
    }
    await cart.save();
  }
  return cart;
};

// Get cart by user
export const getCartByUser = async (userId: string) => {
  return CartModel.findOne({ userId });
};
