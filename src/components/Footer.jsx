import facebook from "../assets/social/facebook.png";
import instagram from "../assets/social/instagram.png";
import x from "../assets/social/x.png";
import tiktok from "../assets/social/tiktok.png";
import icone_original from "../assets/logos/icone_original.png";
import { useState, useEffect } from "react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = () => {
    const currentdata = new Date();
    const year = currentdata.getFullYear();
    return year;
  };

  return (
    <footer className="footer">
      <section className="footer__main">
        <h1 className="footer__main__title">
          <strong style={{ fontWeight: "500" }}>Upgrade Your Everyday</strong>{" "}
          <br /> One smart choice At <br />a Time
        </h1>

        <section className="footer__main__info">
          <span onClick={scrollToTop} className="footer__info__gototop">
            Go to the top ↑
          </span>

          <div className="footer__info__more">
            <p>
              About Us <br />
              Contact us <br />
              Privacy Policy <br />
              Returns & Exchanges <br />
              Subscribe <br />
              Customer Service
            </p>
            <p>
              Gift Cards <br />
              Events <br />
              Sustainability <br />
              Community <br />
              Support <br />
              Track Your Order
            </p>
            <p>
              Feedback <br />
              Loyalty Program <br />
              Privacy Policy <br />
              Shipping Info <br />
              Affiliate Program <br />
              Wishlist
            </p>
          </div>
        </section>
        <span onClick={scrollToTop} className="footer__main__topmobile">
            Go to the top ↑
          </span>
      </section>

      <section className="footer__social">
        <div>
          <img src={instagram} alt="" />
        </div>
        <div>
          <img src={tiktok} alt="" />
        </div>
        <div>
          <img src={facebook} alt="" />
        </div>
        <div>
          <img src={x} alt="" />
        </div>
      </section>

      <img className="footer__logo" src={icone_original} alt="logo" />

      <span className="footer__copyright">
        © <strong>{currentYear()} SVAŠTARA.</strong> All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
