import mongoose, { Schema, Document } from "mongoose";

export interface IAuthor extends Document {
  name: string;
  phone: string;
  dob: Date;
}

const authorSchema = new Schema<IAuthor>(
  {
    name: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Author = mongoose.model<IAuthor>("Author", authorSchema);
