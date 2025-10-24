import express from "express";
import { getCards } from "../controllers/cardController";

const router = express.Router();

router.get("/cards", getCards);

export default router;
