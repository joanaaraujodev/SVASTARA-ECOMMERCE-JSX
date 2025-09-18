import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import fav from "../assets/outros/fav.png";
import cart_white from "../assets/outros/cart_white.png";
import { FavoritesContext } from "./FavoritesContext";

function ProductDetailCard({
  title,
  description,
  category,
  img,
  price,
  brand,
  warranty,
  shipping,
  availability,
  returnPolicy,
  productId,
}) {
  const [mainImage, setMainImage] = useState("frame-1");
  const { addToCart } = useContext(CartContext);
  const { toggleFav } = useContext(FavoritesContext);

  return (
    <div className="productDetailCard">
      <div className="productDetailCard__imgs">
        <div className="productDetailCard__imgs__childs">
          <div
            className=" productDetailCard__imgs__childs__child"
            onClick={() => setMainImage("frame-1")}
          >
            <img
              className=" productDetailCard__imgs__childs__child__1"
              src={img}
              alt={title}
            />
          </div>
          <div
            className=" productDetailCard__imgs__childs__child"
            onClick={() => setMainImage("frame-2")}
          >
            <img
              className=" productDetailCard__imgs__childs__child__2"
              src={img}
              alt={title}
            />
          </div>
          <div
            className=" productDetailCard__imgs__childs__child"
            onClick={() => setMainImage("frame-3")}
          >
            <img
              className=" productDetailCard__imgs__childs__child__3"
              src={img}
              alt={title}
            />
          </div>
        </div>
        <div className="productDetailCard__imgs__main__container">
          <img className={mainImage} src={img} alt={title} />
        </div>
      </div>

      <div className="productDetailCard__info">
        <div className="productDetailCard__info__main">
          <h2 className="productDetailCard__info__main__title">{title}</h2>
          <span className="productDetailCard__info__main__category">
            {category}
          </span>
          <button className="productDetailCard__info__main__price">
            {price}
          </button>
        </div>

        <div className="productDetailCard__info__description">
          <span>Description</span>
          <p>{description}</p>
        </div>

        <div className="productDetailCard__info__buttons">
          <div className="productDetailCard__info__buttons__cart">
            <button
              onClick={() =>
                addToCart({
                  id: title,
                  img,
                  title,
                  price,
                  category,
                })
              }
            >
              Add to cart
            </button>
            <img src={cart_white} alt="fav" />
          </div>

          <div className="productDetailCard__info__buttons__favs">
            <button onClick={() => toggleFav({ id: productId, title })}>
              Save to favorites
            </button>
            <img src={fav} alt="fav" />
          </div>
        </div>

        <div className="productDetailCard__info__more">
          <span className="productDetailCard__info__more__title">
            Availability
            <strong className="productDetailCard__info__more__txt">
              {availability}
            </strong>
          </span>
          <span className="productDetailCard__info__more__title">
            Reviews
            <strong className="productDetailCard__info__more__txt">
              ★★★★★ 5/5
            </strong>
          </span>
          <span className="productDetailCard__info__more__title">
            Brand
            <strong className="productDetailCard__info__more__txt">
              {brand}
            </strong>
          </span>
          <span className="productDetailCard__info__more__title">
            Warranty
            <strong className="productDetailCard__info__more__txt">
              {warranty}
            </strong>
          </span>
          <span className="productDetailCard__info__more__title">
            Shipping
            <strong className="productDetailCard__info__more__txt">
              {shipping}
            </strong>
          </span>
          <span className="productDetailCard__info__more__title">
            Return Policy
            <strong className="productDetailCard__info__more__txt">
              {returnPolicy}
            </strong>
          </span>
        </div>
        <div className="productDetailCard__info__extra">
          <span>Additional Information</span>
          <p>
            This product has been tested under rigorous quality standards to
            ensure long-lasting performance. Ideal for both professional and
            personal use, it combines practicality with a sleek design.
          </p>
          <p>
            Maintenance is simple: just clean with a dry cloth and avoid
            exposure to extreme conditions. Detailed instructions are included
            in the manual.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
