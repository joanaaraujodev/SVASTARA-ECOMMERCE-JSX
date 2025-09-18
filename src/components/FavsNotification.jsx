import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

function FavsNotification() {
  const { notificationFav } = useContext(FavoritesContext);

  if (!notificationFav) return null;

  return <div className="notification">{notificationFav}</div>;
}

export default FavsNotification;
