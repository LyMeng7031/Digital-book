import { Request, Response } from "express";
import {
  createCategoryService,
  getAllCategoriesService,
  getCategoryByIdService,
  updateCategoryService,
  deleteCategoryService,
} from "@/services/categoryService";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await createCategoryService(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create category",
    });
  }
};

export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await getAllCategoriesService();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Failed to fetch categories" });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await getCategoryByIdService(req.params.id);
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Failed to fetch category" });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await updateCategoryService(req.params.id, req.body);
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Failed to update category" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await deleteCategoryService(req.params.id);
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Failed to delete category" });
  }
};
