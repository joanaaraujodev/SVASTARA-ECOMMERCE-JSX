import { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

function ProductsList() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [pagination, setPagination] = useState([1, 2, 3, 4, 5]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    function updateValues() {
      if (window.matchMedia("(max-width: 1200px)").matches) {
        setLimit(10);
        setPagination([1, 2, 3, 4, 5, 6]);
      } else {
        setLimit(15);
        setPagination([1, 2, 3, 4, 5]);
      }
    }

    updateValues();
    window.addEventListener("resize", updateValues);

    return () => {
      window.removeEventListener("resize", updateValues);
    };
  }, []);

  useEffect(() => {
    const skip = (page - 1) * limit;
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page, limit]);
  console.log (products, 'produtos')
  const filteredProducts = products.filter((fproduct) =>
    fproduct.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (isLoading === true) return <Loader />;

  return (
    <>
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
              price={`${product?.price} €`}
              category={product.category}
              productId={product.id}
            />
          );
        })}

        <div className="pagination">
          {pagination.map((num) => (
            <button
              className="pagination__btn"
              key={num}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsList;
