import { Title } from "../../component/title/Title.tsx";
import { ProductCard } from "../productCard/ProductCard.tsx";
import s from "./SectionSales.module.css";
import {product} from "../../data/Toys.ts";

export const SaleSection = () => {
  return (
    <div className={s.saleSection}>
      <div className={s.saleTitle}>
        <Title as="h3" style={{
          color: "var(--color-primary-darkBlue)",
          font: "var(--text-h1)",
          paddingBottom: "2.1875rem",
          textTransform: "capitalize"
        }}>Sales Now On</Title>
      </div>
      <div className={s.saleGrid}>
        {product.saleProductCard.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};