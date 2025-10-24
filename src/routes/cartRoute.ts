import { Router } from "express";
import {
  addCartItemController,
  getCartController,
} from "../controllers/cartController";

const router = Router();

router.post("/add", addCartItemController);
router.get("/:userId", getCartController);

export default router;
