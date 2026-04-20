import { Title } from "../../../title/Title.tsx";
import { Button } from "../../../button/Button.tsx";
import s from "./ToyCar.module.css";

export const ToyCar = () => {
  return (
    <div className={s.toy}>
      <Title
        as="h4"
        style={{
          font: "var(--text-promoTitle)",
          color: "var(--color-primary-white)",
          paddingTop: "1.875rem",
          marginLeft: "1.375rem",
          marginBottom: "1rem",
        }}
      >
        Toy Car Adventures
      </Title>
      <Button
        style={{
          borderRadius: "7.5rem",
          padding: "0.56rem 1.5rem 0.69rem",
          width: "7.5rem",
          height: "2.5rem",
          font: "var(--text-promoButton)",
          color: "var(--color-primary-white)",
          backgroundColor: "var(--color-primary-blue)",
          marginLeft: "10rem",
        }}
      >
        Shop Now
      </Button>
    </div>
  );
};
