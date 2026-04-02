import {product} from "../../data/Toys.ts";
import {ProductCard} from "../../layout/productCard/ProductCard.tsx";
import s from "./ProductList.module.css"
export const ProductList = () => {
  return (
    <div className={s.list}>
      {product.productCard.map((item) => (
        <ProductCard style={{width: '16rem'}} key={item.id} {...item} />
      ))}
    </div>
  );
};