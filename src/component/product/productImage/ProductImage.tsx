import style from "./ProductImage.module.css"
import { ProductSales } from "../productSales/ProductSales.tsx";
import { Wish } from "../../wish/Wish.tsx";
import { Count } from "../../count/Count.tsx";
import { Button } from "../../button/Button.tsx";

export const ProductImage = () => {
  return (
    <div className={style.productImage}>
      <ProductSales/>
      <Wish/>
      <Count/>
      <Button style={{
        position: "absolute",
        left: "1rem",
        top: "206px",
        padding: "0.56rem 1.7rem 0.69rem",
        width: "8.44rem",
        height: "2.5rem",
        font: "var(--text-button)",
        color: "var(--color-primary-white)",
      }}>Add To Cart</Button>
      {/*<img src="#" alt="#" />*/}
    </div>
  );
};

