import { ICartItem } from "./cartItemType";

export interface IOrder {
  userId: string;
  items: ICartItem[];
  totalPrice: number;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  createdAt?: Date;
  updatedAt?: Date;
}
