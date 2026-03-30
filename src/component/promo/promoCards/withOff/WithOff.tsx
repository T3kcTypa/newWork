import { Text } from "../../../text/Text.tsx";
import { Title } from "../../../title/Title.tsx";
import { Button } from "../../../button/Button.tsx";
import s from "./WithOff.module.css"

export const WithOff = () => {
  return (
    <div className={s.with}>
      <Text style={{
        font: "var(--text-promoTextSecond)",
        color: "var(--color-gray-900)",
        marginLeft: "2rem",
        paddingTop: "1.875rem"
      }}>Get ready to rock</Text>
      <Title as="h4" style={{
        font: "var(--text-promoTitleSecond)",
        color: "var(--color-primary-blue)",
        marginLeft: "2rem",
      }}>with 25% off</Title>
      <Text style={{
        font: "var(--text-promoTextSecond)",
        color: "var(--color-gray-900)",
        marginLeft: "2rem",
        marginBottom: "1rem",
      }}>on all Musical<br/>Instruments!</Text>
      <Button style={{
        borderRadius: "7.5rem",
        padding: "0.56rem 1.5rem 0.69rem",
        width: "7.5rem",
        height: "2.5rem",
        font: "var(--text-promoButton)",
        color: "var(--color-primary-white)",
        backgroundColor: "var(--color-primary-red)",
        marginLeft: "2rem",
      }}>Shop Now</Button>
    </div>
  );
};