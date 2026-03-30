import "../../style/fonts.css";
import "../../style/typography.css";
import "../../style/color.css";
import { CardBg } from "./CardBg.tsx";
import { CardLogo } from "./CardLogo.tsx";
import style from "./Card.module.css";

type CardProps = {
  bgColor: string
  image: string
  imageStyle?: React.CSSProperties
}

export const Card = ({ bgColor, image, imageStyle }: CardProps) => {
  return (
    <div className={style.card}>
      <CardBg style={{
        backgroundColor: bgColor,
        width: "20rem",
        height: "12.5rem",
        borderRadius: "1rem"
      }} />
      <CardLogo
        src={image}
        style={{
          position: "absolute",
          right: "0",
          left: "0",
          ...imageStyle
        }} />
    </div>
  );
};
