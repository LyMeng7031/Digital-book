import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string; // ✅ use lowercase string
  phone?: string;
  age?: number;
  role?: string;
}

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // ✅ correct type
    phone: { type: String },
    age: { type: Number },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUser>("User", userSchema);
