export interface IOrderItem {
  productId: string;
  name?: string; // optional product name
  quantity: number;
  price: number;
  discount?: number; // optional discount
}
