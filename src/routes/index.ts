import { Router } from "express";
import bookRoute from "./bookRoutes";
import authRoute from "./authRoutes";
import categoryRoutes from "./categoryRoute";
import cartRoutes from "./cartRoute";
import cartItemRoutes from "./cartItemRoutes";
const router = Router();

router.use("/books", bookRoute);
router.use("/auth", authRoute);
router.use("/categories", categoryRoutes);
router.use("/api/cart", cartRoutes);
router.use("/api/cart-items", cartItemRoutes);
export default router;
