import { useState, createContext, useEffect } from "react";
import { CartContextType, ChildrenProps } from "./localStorage";
import { CartProduct } from "./product";

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: ChildrenProps) {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [notification, setNotification] = useState<string>("");

  useEffect(() => {
    const storedCart = localStorage.getItem("Cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product: CartProduct) => {
    const filteredCart = cartItems.filter((item) => item.id !== product.id);
    const updatedCart = [...filteredCart, product];
    setCartItems(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
    console.log("Carrinho atualizado:", updatedCart);

    setNotification(`${product.title} adicionado ao carrinho!`);

    setTimeout(() => setNotification(""), 3000);
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
    console.log("Carrinho atualizado:", updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        notification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
