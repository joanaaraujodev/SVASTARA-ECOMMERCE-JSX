import { useContext } from "react";
import { CartContext } from "./CartContext"

function CartNotification() {
  const { notification } = useContext(CartContext);
  

  if (!notification) return null;

  return (
    <div className="notification">
      {notification}
    </div>
  );
}

export default CartNotification;
