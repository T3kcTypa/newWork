import style from "./ProductImage.module.css";
import { ProductSales } from "../productSales/ProductSales.tsx";
import { Wish } from "../../wish/Wish.tsx";
import { Count } from "../../count/Count.tsx";
import { Button } from "../../button/Button.tsx";

export type ProductImageProps = {
  image: string;
  title: string;
};
export const ProductImage = ({ image, title = "Product image" }: ProductImageProps) => {
  return (
    <div className={style.productImage}>
      <img className={style.image} src={image} alt={title} />
      <ProductSales className={style.saleBadge} />
      <Wish
        className={style.hoverAction}
        style={{
          marginTop: "-0.3rem",
        }}
      />
      <Count
        className={style.hoverAction}
        style={{
          position: "absolute",
          left: "1rem",
          top: "9.875rem",
          zIndex: 2,
          width: "9.15rem",
        }}
      />
      <Button
        className={style.hoverAction}
        style={{
          position: "absolute",
          left: "1rem",
          top: "206px",
          zIndex: 2,
          padding: "0.56rem 1.7rem 0.69rem",
          width: "8.44rem",
          height: "2.5rem",
          font: "var(--text-button)",
          color: "var(--color-primary-white)",
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};
