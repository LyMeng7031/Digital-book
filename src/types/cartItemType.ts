export interface ICartItem {
  productId: string;
  quantity: number;
  price?: number; // optional if you want to store price
  name?: string; // optional product name
}
