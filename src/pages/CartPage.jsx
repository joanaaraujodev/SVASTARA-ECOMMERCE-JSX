import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import cart_white from "../assets/outros/cart_white.png";
import { CartContext } from "../components/CartContext";
import bin from "../assets/outros/bin.png";

function CartPage() {
  const { cartItems } = useContext(CartContext);
  

  const hasData = cartItems.length > 0;

  if (!hasData)
    return (
      <>
        <div className="cartspage__title">
          <h1 className="cart__txt">Items in my cart</h1>
          <img src={cart_white} alt="cart_icon" width={65} />
        </div>

        <div className="cart__nodata">
          <h1>
            Your cart is empty. <br />
            Start adding some products!
          </h1>
        </div>
      </>
    ); 

  return (
    <>
      <div className="cartspage__title">
        <h1 className="cart__txt">Items in my cart</h1>
        <img src={cart_white} alt="cart_icon" />
      </div>

      <div className="cartspage__subtitles">
        <span>Items</span>
        <div className="cartspage__subtitles__specific">
          <span>Unit Price</span>
          <span>Quantiy</span>
          <span>Total Price</span>
        </div>
      </div>
      <section className="cartMain">
        {cartItems.map((cartItem, index) => {
          return (
            <ProductCard
              className="productCardCart"
              key={`${index}- ${cartItem.id}`}
              img={cartItem.img}
              title={cartItem.title}
              price={cartItem?.price}
              category={cartItem.category}
              productId={cartItem.id}
              hasFooter={false}
              hasButton={false}
              hasBin={true}
              bin={bin}
              addToFavs={true}
            />
          );
        })}
      </section>
    </>
  );
}

export default CartPage;
