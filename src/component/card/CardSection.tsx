import { Card } from "./Card.tsx";
import style from "./Card.module.css";
import "../../style/fonts.css";
import "../../style/typography.css";
import "../../style/color.css";
import dino from "../../images/dino.webp";

export const CardSection = () => {
  return (
    <div className={style.cardSection}>
      <Card imageStyle={{
        width: "12.45rem",
        height: "14.25rem",
        marginLeft: "7.55rem",
        marginTop: "-10.30rem",
      }} image={dino} bgColor="var(--color-primary-lightPink)"/>
      <Card imageStyle={{
        width: "12.45rem",
        height: "14.25rem",
        marginLeft: "7.55rem",
        marginTop: "-10.30rem",
      }} image={dino} bgColor="var(--color-primary-lightPink)"/>
      <Card imageStyle={{
        width: "12.45rem",
        height: "14.25rem",
        marginLeft: "7.55rem",
        marginTop: "-10.30rem",
      }} image={dino} bgColor="var(--color-primary-lightPink)"/>
      <Card imageStyle={{
        width: "12.45rem",
        height: "14.25rem",
        marginLeft: "7.55rem",
        marginTop: "-10.30rem",
      }} image={dino} bgColor="var(--color-primary-lightPink)"/>
    </div>
  );
};