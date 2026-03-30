import { ProductImage } from "../../component/product/productImage/ProductImage.tsx";
import s from "./ProductCard.module.css"
import { ProductCardBottom } from "../../component/product/productCardBottom/ProductCardBottom.tsx";

export const ProductCard = () => {
  return (
    <div className={s.card}>
      <ProductImage/>
      <ProductCardBottom/>
    </div>
  );
};