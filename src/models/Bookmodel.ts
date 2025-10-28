import mongoose, { Schema, Document } from "mongoose";
import { IAuthor } from "./authorModel";

export interface IBook extends Document {
  title: string;
  author: IAuthor["_id"];
}

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model<IBook>("Book", bookSchema);
