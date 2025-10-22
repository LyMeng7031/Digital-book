import { Category } from "@/models/categoryModel";
import { ICategory } from "@/types/category";

export const createCategoryService = async (data: ICategory) => {
  const category = await Category.create(data);
  return category;
};

export const getAllCategoriesService = async () => {
  return await Category.find();
};

export const getCategoryByIdService = async (id: string) => {
  return await Category.findById(id);
};

export const updateCategoryService = async (id: string, data: ICategory) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCategoryService = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};
