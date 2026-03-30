import { CardFront } from "../../component/cardFront/CardFront.tsx";
import { Text } from "../../component/text/Text.tsx";
import { ScrollPrice } from "../../component/price/ScrollPrice.tsx";
import s from "./ScrollSection.module.css";
import type {CardFrontProps} from "../../component/cardFront/CardFront.tsx";

export type ScrollSectionProps = {
  title: string,
  price: number,
} & CardFrontProps

export const ScrollSection = ({title, price, image} : ScrollSectionProps) => {
  return (
    <div>
      <CardFront image={image}/>
      <div className={s.scrollSection}>
        <Text>{title}</Text>
        <ScrollPrice>${price}</ScrollPrice>
      </div>
    </div>
  );
};