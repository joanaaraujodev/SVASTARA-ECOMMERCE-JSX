import { useState, createContext, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  console.log(cartItems, "cartItems");

  useEffect(() => {
    const storedCart = localStorage.getItem("Cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    const filteredCart = cartItems.filter((item) => item.id !== product.id);
    const updatedCart = [...filteredCart, product];
    setCartItems(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
    console.log("Carrinho atualizado:", updatedCart);

    setNotification(`${product.title} adicionado ao carrinho!`);

    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (id) => {
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
