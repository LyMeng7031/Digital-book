import { Request, Response } from "express";
import { addItemToCart, getCartByUser } from "../services/cartService";

export const addCartItemController = async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cart = await addItemToCart(userId, { productId, quantity });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error adding item to cart", error });
  }
};

export const getCartController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const cart = await getCartByUser(userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};
