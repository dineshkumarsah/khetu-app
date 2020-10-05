export interface Order {
    cartItem: CartItem;
  }
  
  export interface CartItem {
    sku: string;
    qty: number;
    quote_id: string;
  }