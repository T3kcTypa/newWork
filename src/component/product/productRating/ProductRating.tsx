import style from "./ProductRating.module.css"
import { Icon } from "../../icon/Icon.tsx";

export const ProductRating = () => {
  return (
    <div className={style.stars}>
        <span>
          <Icon id="star-filled" color="var(--color-primary-yellow)"/>
        </span>
        <span>
          <Icon id="star-outline" color="var(--color-gray-300)"/>
        </span>
        <span>
          <Icon id="star-outline" color="var(--color-gray-300)"/>
        </span>
        <span>
          <Icon id="star-outline" color="var(--color-gray-300)"/>
        </span>
        <span>
          <Icon id="star-outline" color="var(--color-gray-300)"/>
        </span>
    </div>
  );
};