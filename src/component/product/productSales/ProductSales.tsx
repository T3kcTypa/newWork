import s from "./ProductSales.module.css"
import React  from "react";

type ProductSalesProps = {
  style?: React.CSSProperties
}

export const ProductSales = ( { style } : ProductSalesProps) => {
  return (
    <div className={s.sales} style={style}>
      <span>-20%</span>
    </div>
  );
};