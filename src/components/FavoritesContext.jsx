import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);

function FavoritesProvider({ children }) {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );

  const [notificationFav, setNotificationFav] = useState(null);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const isFav = (id) => favs.includes(id);

  const toggleFav = (product) => {
    const { id, title } = product;
    if (isFav(id)) {
      setFavs(favs.filter((fav) => fav !== id));
      setNotificationFav(`${title} foi removido dos favoritos!`);
    } else {
      setFavs([...favs, id]);
      setNotificationFav(`${title} foi adicionado aos favoritos!`);
    }

    setTimeout(() => setNotificationFav(null), 3000);
  };

  return (
    <FavoritesContext.Provider
      value={{ favs, toggleFav, isFav, notificationFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesProvider, FavoritesContext };
