import { createContext, useEffect, useState } from "react";
import { ChildrenProps, FavsContextType } from "./localStorage";
import { FavProduct } from "./product";

const FavoritesContext = createContext<FavsContextType | null>(null);

function FavoritesProvider({ children }: ChildrenProps) {
  const [favs, setFavs] = useState<FavProduct[]>(() => {
    const stored = localStorage.getItem("favs");
    return stored ? (JSON.parse(stored) as FavProduct[]) : [];
  });

  const [notificationFav, setNotificationFav] = useState<string | null>(null);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const isFav = (id: number) => favs.some((product) => product.id === id);

  const toggleFav = (product: FavProduct) => {
    if (isFav(product.id)) {
      setFavs(favs.filter((p) => p.id !== product.id));
      setNotificationFav(`${product.title} foi removido dos favoritos!`);
    } else {
      setFavs([...favs, product]);
      setNotificationFav(`${product.title} foi adicionado aos favoritos!`);
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
