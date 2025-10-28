import { Router } from "express";
import {
  createOrderController,
  getOrdersByUserController,
  updateOrderStatusController,
  deleteOrderController,
} from "../controllers/orderController";

const router = Router();

router.post("/create-order", createOrderController);
router.get("/:userId", getOrdersByUserController);
router.patch("/:orderId/status", updateOrderStatusController);
router.delete("/:orderId", deleteOrderController);
export default router;
