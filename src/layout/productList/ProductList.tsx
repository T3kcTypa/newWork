import {product} from "../../data/Toys.ts";
import {ProductCard} from "../../component/product/productCard/ProductCard.tsx";
import s from "./ProductList.module.css"
export const ProductList = () => {
  return (
    <div className={s.list}>
      {product.productCard.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
