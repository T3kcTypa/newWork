import s from "./Price.module.css"
import React from "react";

type PriceProps = {
      style?: React.CSSProperties;
      oldPrice?: number;
      price: number;
}

export const Price = ( { style, price, oldPrice } : PriceProps) => {
  return (
    <div className={s.price} style={style}>
        <span className={s.newPrice}>
          ${price}
        </span>
        <span className={s.oldPrice}>
          ${oldPrice}
        </span>
    </div>
  );
};