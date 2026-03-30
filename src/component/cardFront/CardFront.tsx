import s from "./CardFront.module.css"

export type CardFrontProps = {
  image: string;
};

export const CardFront = ({ image } : CardFrontProps) => {
  return (
      <a href="#" className={s.cardFront}>
        <img src={image} alt="#" />
      </a>
  );
};