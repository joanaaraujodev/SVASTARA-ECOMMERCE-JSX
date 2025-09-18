import { FavoritesContext } from "../components/FavoritesContext";
import ProductCard from "../components/ProductCard";
import { useContext, useState, useEffect } from "react";
import fav from "../assets/outros/fav.png";
import Loader from "../components/Loader";

function FavoritesPage() {
  const { favs } = useContext(FavoritesContext);

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(` https://dummyjson.com/products?limit=111`);
        const newProductsList = await data.json();

        setTimeout(() => {
          setProducts(newProductsList.products);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading === true) return <Loader />;
  const favProducts = products.filter((p) => favs.includes(p.id));
  const hasData = favProducts.length > 0;

  if (!hasData)
    return (
      <>
        <div className="favspage__title">
          <h1 className="favs__txt">My favorites</h1>
          <img src={fav} alt="fav_icon" width={50} />
        </div>

        <div className="favs__nodata">
          <h1>You haven’t added any favorites yet.</h1>
        </div>
      </>
    );

  return (
    <>
      <div className="favspage__title">
        <h1 className="favs__txt">My favorites</h1>
        <img src={fav} alt="fav_icon"/>
      </div>

      <section className="main__myfavs">
        {favProducts.map((favProduct, index) => {
          return (
            <ProductCard
              className="productCard"
              key={`${index}- ${favProduct?.id}`}
              img={favProduct.images?.[0]}
              title={favProduct?.title}
              price={`${favProduct?.price} €`}
              category={favProduct?.category}
              productId={favProduct?.id}
            />
          );
        })}
      </section>
    </>
  );
}

export default FavoritesPage;
