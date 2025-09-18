import { FavProduct, CartProduct } from "./product";

export interface CartContextType {
  cartItems: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
  notification: string;
}

export interface ChildrenProps  { 
    children: React.ReactNode;
 }

export interface FavsContextType {
  favs: FavProduct[];
  toggleFav: (product: FavProduct) => void;
  isFav: (id: number) => boolean;
  notificationFav: string | null;
}
