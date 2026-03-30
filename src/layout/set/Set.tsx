import { Toys } from "../../data/Toys.ts";
import s from "./Set.module.css";
import { H3Tittle } from "../../component/h3Title/H3Tittle.tsx";
import { ScrollSection } from "../scrollSection/ScrollSection.tsx";
import { Icon } from "../../component/icon/Icon.tsx";
import { ProductScroll } from "../../component/product/productScroll/ProductScroll.tsx";


export const Set = () => {
  return (
    <div className={s.container}>
      <H3Tittle>Lego Sets</H3Tittle>
      <div className={s.cardFLex}>
        <div className={s.iconLeft}>
          <Icon id="arrowLeftCircleFill" color='red' width="2.125rem" height="2.125rem"/>
        </div>
        {Toys.map((toy) => <ScrollSection key={toy.id} title={toy.title} image={toy.image} price={toy.price} />)}
        <div className={s.iconRight}>
          <Icon id="arrowRightCircleFill" color='red' width="2.125rem" height="2.125rem"/>
        </div>
      </div>
      <ProductScroll/>
    </div>
  );
};