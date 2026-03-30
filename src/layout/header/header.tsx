import style from "./Header.module.css";
import logo from "../../images/LOGO.webp";
import sprite from "../../../public/sprite-svg.svg";

export const Header = () => {
  return (
    <div className={style.all}>
      <div className={style.headerLine}></div>
      <div className={style.container}>
        <div className={style.logoMenu}>
          <div className={style.logo}>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className={style.search}>
            <input type="text" placeholder="Search" />
            <div className={style.categories}>
              <div className={style.categoriesArrow}>
                <p className={style.categoriesText}>All Categories</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <use href={`${sprite}#arrowDown`} />
                </svg>
              </div>
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <use href={`${sprite}#loupe`} />
                </svg>
              </div>
            </div>
          </div>
          <div className={style.menu}>
            <div className={style.heart}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use href={`${sprite}#heart2`} />
              </svg>
              <p>Wishlist</p>
            </div>
            <div className={style.cart}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use href={`${sprite}#groceryCart`} />
              </svg>
              <p>Cart</p>
            </div>
            <div className={style.woman}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use href={`${sprite}#woman`} />
              </svg>
              <p>Login</p>
            </div>
          </div>
        </div>
        <div className={style.naviBlock}>
          <div className={style.burgerMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <use href={`${sprite}#burgerMenu`} />
            </svg>
            <p>Browser Categories</p>
          </div>
          <div className={style.naviLine}></div>
          <div className={style.navi}>
            <a href="#">Homepages</a>
            <a href="#">Pages</a>
            <a href="#">Collection</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className={style.order}>
            <a href="#">Track Your Order</a>
            <div className={style.language}>
              <p>English</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#01ABBA">
                <use href={`${sprite}#arrowDown`} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};