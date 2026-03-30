import { Title } from "../../../title/Title.tsx";
import { Text } from "../../../text/Text.tsx";
import { Button } from "../../../button/Button.tsx";
import s from "./CreativeWithWood.module.css"

export const CreativeWithWood = () => {
  return (
    <div className={s.creative}>
      <Title as='h4' style={{
        font: "var(--text-promoTitle)",
        color: "var(--color-primary-red)",
        paddingTop: "4.4375rem",
        marginLeft: "2rem",
        marginBottom: "1rem",
      }}>
        Unleash Creativity<br/>with Wood</Title>
      <Text style={{
        font: "var(--text-promoText)",
        color: "var(--color-gray-700)",
        marginLeft: "2rem",
        marginBottom: "1rem",
      }}>Encourage learning through play with our wooden treasures.</Text>
      <Button style={{
        borderRadius: "7.5rem",
        padding: "0.56rem 1.5rem 0.69rem",
        width: "7.5rem",
        height: "2.5rem",
        font: "var(--text-promoButton)",
        color: "var(--color-primary-white)",
        backgroundColor: "var(--color-primary-yellow)",
        marginLeft: "2rem",
      }}>
        Shop Now</Button>
    </div>
  );
};