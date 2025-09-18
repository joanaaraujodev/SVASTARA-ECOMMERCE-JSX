import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "./CartContext";
import Counter from "./Counter";
import fav from "../assets/outros/fav.png";
import { FavoritesContext } from "./FavoritesContext";
import icone_preto from "../assets/logos/icone_preto.png";
import beauty from "../assets/icones-categorias/beauty.png";
import fragrances from "../assets/icones-categorias/fragances.png";
import furniture from "../assets/icones-categorias/furniture.png";
import smartphones from "../assets/icones-categorias/smartphones.png";
import clothes from "../assets/icones-categorias/clothes.png";
import groceries from "../assets/icones-categorias/groceries.png";
import sports from "../assets/icones-categorias/sports.png";
import home_decor from "../assets/icones-categorias/home-decor.png";
import kitchen from "../assets/icones-categorias/kitchen.png";
import shoes from "../assets/icones-categorias/shoes.png";

function ProductCard({
  img,
  title,
  price,
  category,
  productId,
  className,
  hasFooter = true,
  hasButton = true,
  hasBin = false,
  bin,
  addToFavs = false,
}) {
  const categoryInfo = [
    { name: "beauty", icon: beauty },
    { name: "fragrances", icon: fragrances },
    { name: "groceries", icon: groceries },
    { name: "home-decoration", icon: home_decor },
    { name: "kitchen-accessories", icon: kitchen },
    { name: "furniture", icon: furniture },
    { name: "smartphones", icon: smartphones },
    { name: "mens-shirts", icon: clothes },
    { name: "womens-shoes", icon: shoes },
    { name: "sports", icon: sports },
  ];

  const currentCategory = categoryInfo.find((c) => c.name === category);

  const { addToCart, removeFromCart } = useContext(CartContext);
  const { toggleFav, isFav } = useContext(FavoritesContext);
  const [counterValue, setCounterValue] = useState(1);

  const navigate = useNavigate();
  const CardClick = () => {
    navigate(`/product/${productId}`);
  };

  const calculateTotal = (onePrice, quantity) => {
    const numericPrice = parseFloat(String(onePrice));
    if (isNaN(numericPrice)) return "N/A";
    return `${(numericPrice * quantity).toFixed(2)}€`;
  };

  return (
    <div
      className={className}
      onClick={() => {
        if (className === "productCard") {
          CardClick();
        }
      }}
    >
      {addToFavs ? (
        <div className={`${className}__fav-wrapper`}>
          <span>Add to favs</span>
          <img
            onClick={(e) => {
              e.stopPropagation();
              toggleFav({ id: productId, title });
            }}
            src={fav}
            alt="fav"
            className={`${className}__favbutton ${
              isFav(productId) ? `${className}__favbutton--active` : ""
            }`}
          />
        </div>
      ) : (
        <img
          onClick={(e) => {
            e.stopPropagation();
            toggleFav({ id: productId, title });
          }}
          src={fav}
          alt="fav"
          className={`${className}__favbutton ${
            isFav(productId) ? `${className}__favbutton--active` : ""
          }`}
        />
      )}

      <img
        onClick={() => {
          if (className === "productCardCart") {
            CardClick();
          }
        }}
        className={`${className}__img`}
        src={img}
        alt=""
      />
      <div className={`${className}__row`}>
        <div className={`${className}__row__main`}>
          <h3 className={`${className}__row__title`}>{title}</h3>

          {hasButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart({ id: productId, img, title, price, category });
              }}
              className={`${className}__row__buy`}
            >
              BUY
            </button>
          )}
        </div>

        {hasButton ? (
          <button className={`${className}__price`}>{price}</button>
        ) : (
          <div className="productCardCart__info">
            <button className="productCardCart__info__price">{price}</button>
            <Counter value={counterValue} onChange={setCounterValue} />
            <button className="productCardCart__info__totalprice">
              {calculateTotal(price, counterValue)}
            </button>
          </div>
        )}
      </div>

      {hasFooter && (
        <div className={`${className}__footer`}>
          <div className={`${className}__footer__info`}>
            <img
              className={`${className}__footer__info__categoryicon`}
              src={currentCategory?.icon}
              alt={category}
            />

            <div className={`${className}__footer__info__txt`}>
              <span className={`${className}__footer__info__txt__category`}>
                {category}
              </span>

              <h4 className={`${className}__footer__info__txt__brand`}>
                SVAŠTARA
              </h4>
            </div>
          </div>
          <img
            className={`${className}__footer__logo`}
            src={icone_preto}
            alt="svastara_logo"
          />
        </div>
      )}

      {hasBin && (
        <img
          onClick={() => removeFromCart(productId)}
          className={`${className}__bin`}
          src={bin}
          alt="removeproduct"
        />
      )}
    </div>
  );
}

export default ProductCard;
