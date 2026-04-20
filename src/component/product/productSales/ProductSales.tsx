import s from "./ProductSales.module.css"
import React  from "react";

type ProductSalesProps = {
  className?: string
  style?: React.CSSProperties
}

export const ProductSales = ( { className = "", style } : ProductSalesProps) => {
  return (
    <div className={`${s.sales} ${className}`.trim()} style={style}>
      <span>-20%</span>
    </div>
  );
};
