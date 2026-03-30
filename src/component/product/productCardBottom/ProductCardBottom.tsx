import { Text } from "../../text/Text.tsx";
import { ProductRating } from "../productRating/ProductRating.tsx";
import { ProductReviews } from "../productReviews/ProductReviews.tsx";
import { Price } from "../../price/Price.tsx"
import s from "./ProductCardBottom.module.css"


export const ProductCardBottom = () => {
  return (
    <div className={s.product}>
      <Text>Stuffed Animals 6-inch Round Octopi Plush Toy</Text>
        <div className={s.productRating}>
          <ProductRating/>
          <ProductReviews/>
        </div>
      <Price/>
    </div>
  );
};