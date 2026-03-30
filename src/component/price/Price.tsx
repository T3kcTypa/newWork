import s from "./Price.module.css"
import React from "react";

type PriceProps = {
      style?: React.CSSProperties
}

export const Price = ( { style } : PriceProps) => {
  return (
    <div className={s.price} style={style}>
        <span className={s.newPrice}>
          $19
        </span>
        <span className={s.oldPrice}>
          $24
        </span>
    </div>
  );
};