import { Request, Response } from "express";
import {
  updateCartItemService,
  deleteCartItemService,
} from "../services/cartItemService";

export const updateCartItemController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // cartItem id
    const { quantity } = req.body;

    const updatedItem = await updateCartItemService(id, quantity);
    return res.status(200).json(updatedItem);
  } catch (error) {
    return res.status(500).json({ message: "Error updating cart item", error });
  }
};

export const deleteCartItemController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // cartItem id

    const deleted = await deleteCartItemService(id);
    return res.status(200).json({ message: "Cart item deleted", deleted });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting cart item", error });
  }
};
