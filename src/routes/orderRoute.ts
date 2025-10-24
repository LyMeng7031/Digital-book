import { Router } from "express";
import {
  createOrderController,
  getOrdersByUserController,
  updateOrderStatusController,
} from "../controllers/orderController";

const router = Router();

router.post("/", createOrderController);
router.get("/:userId", getOrdersByUserController);
router.patch("/:orderId/status", updateOrderStatusController);

export default router;
