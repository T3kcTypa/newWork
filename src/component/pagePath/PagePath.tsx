import { Icon } from "../icon/Icon.tsx";
import s from "./PagePath.module.css"

export const PagePath = () => {
  return (
    <div>
      <nav className={s.nav}>
        <a href="/">Homepage</a>
        <span><Icon id="arrowRight" fill="none" width="17" height="17"/></span>
        <a href="/categories">Categories</a>
        <span><Icon id="arrowRight" fill="none" width="17" height="17"/></span>
        <span>Lego</span>
      </nav>
    </div>
  );
};