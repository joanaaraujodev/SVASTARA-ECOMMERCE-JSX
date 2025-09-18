import ProductDetailCard from "../components/ProductDetailCard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router";

function ProductDetailPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductDetail = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(`https://dummyjson.com/products/${id}`);
        const newProduct = await data.json();

        setTimeout(() => {
          setProduct(newProduct);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    };
    fetchProductDetail();
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  if (isLoading) return <Loader />;

  return (
    <ProductDetailCard
      productId={product.id}
      title={product.title}
      description={product.description}
      category={product.category}
      img={product.images?.[0]}
      price={`${product.price} €`}
      brand={product.brand}
      warranty={product.warrantyInformation}
      shipping={product.shippingInformation}
      availability={product.availabilityStatus}
      returnPolicy={product.returnPolicy}
    />
  );
}

export default ProductDetailPage;
