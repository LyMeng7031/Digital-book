import mongoose, { Document, Schema } from "mongoose";

export interface ICard extends Document {
  title: string;
  description: string;
  imageUrl: string;
}

const CardSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.model<ICard>("Card", CardSchema);
