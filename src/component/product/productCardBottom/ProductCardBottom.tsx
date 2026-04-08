import { Text } from "../../text/Text.tsx";
import { ProductRating } from "../productRating/ProductRating.tsx";
import { ProductReviews } from "../productReviews/ProductReviews.tsx";
import { Price } from "../../price/Price.tsx"
import s from "./ProductCardBottom.module.css"
import type { ProductCardProps } from "../productCard/ProductCard.tsx";

type ProductCardBottomProps = {
  title: ProductCardProps[ "title"]
  price: ProductCardProps[ "price"]
  oldPrice?: ProductCardProps[ "oldPrice"]
}

export const ProductCardBottom = ({ title, price, oldPrice } : ProductCardBottomProps ) => {
  return (
    <div className={s.product}>
      <Text style={{marginTop: '1rem', marginBottom: '0.5rem'}}>{title}</Text>
        <div className={s.productRating}>
          <ProductRating/>
          <ProductReviews/>
        </div>
      <Price price={price} oldPrice={oldPrice}/>
    </div>
  );
};