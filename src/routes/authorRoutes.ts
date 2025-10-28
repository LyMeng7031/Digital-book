import { Router } from "express";
import {
  createAuthorController,
  getAuthorsController,
  getAuthorByIdController,
  updateAuthorController,
  deleteAuthorController,
} from "../controllers/authorController";
const router = Router();

router.post("/", createAuthorController);
router.get("/", getAuthorsController);
router.get("/:id", getAuthorByIdController);
router.put("/:id", updateAuthorController);
router.delete("/:id", deleteAuthorController);

export default router;
