import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../types/user";

export interface IUserModel extends IUser, Document {}

const userSchema = new Schema<IUserModel>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    age: { type: Number },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUserModel>("User", userSchema);
