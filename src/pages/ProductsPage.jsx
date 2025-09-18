import Footer from "../components/footer";
import ProductsList from "../components/ProductsList";
import SideBar from "../components/SideBar";

function ProductsPage() {
  return (
    <>
      <section className="hero__section">
        <h1 className="hero__section__title">
          <strong style={{ fontWeight: "400" }}>Everything You Need</strong>
          <span>
            <br /> In The Perfect <br />
            Now
          </span>
        </h1>
        <h1 className="hero__section__title__mobile">
          <strong  >Everything You Need</strong>
          <br /> <span style={{ fontWeight: "200", letterSpacing:'4px' }}>In The Perfect Now</span>
        </h1>
        <span  className="hero__section__more">Discover more</span>
      </section>

      <main className="master">
        <SideBar />
        <ProductsList />
      </main>
    </>
  );
}

export default ProductsPage;
