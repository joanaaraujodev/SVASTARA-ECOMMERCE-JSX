import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

function FavsNotification() {
 const favsContext = useContext(FavoritesContext);

  if (!favsContext)
    throw new Error("FavoritesContext must be used within FavoritesProvider");

  const { notificationFav } = favsContext;

  if (!notificationFav) return null;

  return <div className="notification">{notificationFav}</div>;
}

export default FavsNotification;
