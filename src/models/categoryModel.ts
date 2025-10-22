import mongoose, { Schema, Document } from "mongoose";
import { ICategory } from "@/types/category";

const categorySchema = new Schema<ICategory & Document>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
  },
  { timestamps: true }
);

export const Category = mongoose.model<ICategory & Document>(
  "Category",
  categorySchema
);
