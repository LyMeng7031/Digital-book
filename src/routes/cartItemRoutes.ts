import express from "express";
import {
  updateCartItemController,
  deleteCartItemController,
} from "../controllers/cartItemController";

const router = express.Router();

// PUT /api/cart-items/:id
router.put("/:id", updateCartItemController);

// DELETE /api/cart-items/:id
router.delete("/:id", deleteCartItemController);

export default router;
