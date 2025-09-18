import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router";
import SideBar from "../components/SideBar";

function ProductsCategory() {
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(categoryName);

  const getCategoryForApi = () => {
    if (categoryName === "clothes") {
      return "https://dummyjson.com/products/category/mens-shirts";
    } else if (categoryName === "shoes") {
      return "https://dummyjson.com/products/category/womens-shoes";
      } else if (categoryName === "sports") {
      return "https://dummyjson.com/products/category/sports-accessories";
    } else {
      return `https://dummyjson.com/products/category/${categoryName}`;
    }
  };

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(getCategoryForApi());
        const newProducts = await data.json();
        setProducts(newProducts.products);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchProductsByCategory();
  }, [categoryName]);

  const filteredProducts = products.filter((fproduct) =>
    fproduct.title.toLowerCase().includes(searchText.toLowerCase())
  );
  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (isLoading === true) return <Loader />;

  return (
    <>
      <section className="heroCategory__section">
        <h1 className="heroCategory__section__title">
          {capitalizeFirst(categoryName)}
        </h1>
      </section>
      <main className="master">
        <SideBar />
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search product..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <section className="main">
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                className="productCard"
                key={product.id}
                img={product.images?.[0]}
                title={product.title}
                price={`${product.price} €`}
                category={product.category}
                productId={product.id}
              />
            );
          })}
        </section>
        
      </main>
    </>
  );
}

export default ProductsCategory;
