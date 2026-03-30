import { Title } from "../../../title/Title.tsx";
import { Button } from "../../../button/Button.tsx";
import s from "./SoftHugs.module.css"

export const SoftHugs = () => {
  return (
    <div className={s.creative}>
      <Title as='h4' style={{
        font: "var(--text-promoTitle)",
        color: "var(--color-primary-darkBlue)",
        paddingTop: "2.1875rem",
        marginLeft: "2.1875rem",
        marginBottom: "1.5rem",
      }}>Soft Hugs<br/> Endless Smiles</Title>
      <Button style={{
        borderRadius: "7.5rem",
        padding: "0.56rem 1.5rem 0.69rem",
        width: "7.5rem",
        height: "2.5rem",
        font: "var(--text-promoButton)",
        color: "var(--color-primary-white)",
        marginLeft: "2.1875rem",
      }}>Shop Now</Button>
    </div>
  );
};