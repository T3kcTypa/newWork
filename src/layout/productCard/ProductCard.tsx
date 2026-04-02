import { ProductImage } from "../../component/product/productImage/ProductImage.tsx";
import s from "./ProductCard.module.css"
import { ProductCardBottom } from "../../component/product/productCardBottom/ProductCardBottom.tsx";
import React from "react";

export type ProductCardProps = {
  style?: React.CSSProperties;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
}
export const ProductCard = ( { title, price, oldPrice, image, style }: ProductCardProps) => {
  return (
    <div className={s.card} style={style}>
      <ProductImage image={image} title={title}/>
      <ProductCardBottom
      title={title}
      price={price}
      oldPrice={oldPrice}
      />
    </div>
  );
};