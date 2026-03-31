import s from "./Footer.module.css";
import logo from "../../images/FOOTERLOGO.webp";


export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            <a href="/" className={s.footerLogo}>
              <img src={logo} alt="" />
            </a>
            <p className={s.footerText}>
              Kids Dream is a company dedicated to providing a wide range of
              high-quality children's toys.
            </p>

            <div className={s.footerSocials}>
              <a href="#">Fb</a>
              <a href="#">Tk</a>
              <a href="#">Tw</a>
              <a href="#">Ig</a>
            </div>
          </div>

          <div className={s.footerColumn}>
            <h3>Policies</h3>
            <a href="#">Shipping Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <div className={s.footerColumn}>
            <h3>Help & Information</h3>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Track Order</a>
            <a href="#">My Account</a>
          </div>

          <div className={s.footerColumn}>
            <h3>Contact</h3>
            <a href="#">123 Toy Street, Playland</a>
            <a href="tel:+8603874242">+86 0387 42 42</a>
            <a href="mailto:support@kidsdream.com">support@kidsdream.com</a>
          </div>
        </div>

        <div className={s.footerBottom}>
          <p>Copyright © 2024 Kids Dream. All Rights Reserved.</p>

          <div className={s.footerBottom}>
            <span>Stripe</span>
            <span>Mastercard</span>
            <span>Paypal</span>
            <span>Visa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};