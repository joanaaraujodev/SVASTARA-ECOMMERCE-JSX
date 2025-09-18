import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartNotification() {
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error("CartContext must be used within CartProvider");

  const { notification } = cartContext;

  if (!notification) return null;

  return <div className="notification">{notification}</div>;
}

export default CartNotification;
