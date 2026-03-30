import { Icon } from "../../component/icon/Icon.tsx";
import { Menu } from "../../component/menu/Menu.tsx";
import { BackgroundSquare } from "../../component/backgroundSquare/BackgroundSquare.tsx";
import "../../style/color.css";
import { CardSection } from "../../component/card/CardSection.tsx";
import style from "./Section.module.css";

const menuItems = [
  { label: "Action Figures", leftIcon: <Icon id={"robot"} />, rightIcon: <Icon id={"arrowRight"} /> },
  { label: "Stuffed Animals", leftIcon: <Icon id={"bear"} />, rightIcon: <Icon id={"arrowRight"} /> },
  { label: "Paint Tool", leftIcon: <Icon id={"telescope"} />, rightIcon: <Icon id={"arrowRight"} /> },
  { label: "Jigsaw Puzzles", leftIcon: <Icon id={"puzzle"} />, rightIcon: <Icon id={"arrowRight"} /> },
  { label: "Refracting Telescope", leftIcon: <Icon id={"telescope"} />, rightIcon: <Icon id={"arrowRight"} /> },
  { label: "Building Blocks", leftIcon: <Icon id={"stacker"} />, rightIcon: <Icon id={"arrowRight"} /> },
  { label: "Model Airplane", leftIcon: <Icon id={"airplane"} />, rightIcon: <Icon id={"arrowRight"} /> },
  { label: "Trains and Train Sets", leftIcon: <Icon id={"train"} />, rightIcon: <Icon id={"arrowRight"} /> },
  { label: "Guitar", leftIcon: <Icon id={"guitar"} />, rightIcon: <Icon id={"arrowRight"} /> },
  { label: "Drum Set", leftIcon: <Icon id={"drum-kit"} />, rightIcon: <Icon id={"arrowRight"} /> },
  { label: "Sand & Water Tables", leftIcon: <Icon id={"bucket"} />, rightIcon: <Icon id={"arrowRight"} /> }
];

export const Section = () => {
  return (
    <div className={style.main}>
      <Menu menuItem={menuItems} />
      <BackgroundSquare style={{
        width: "70.13rem",
        height: "30.13rem",
        backgroundColor: "var(--color-gray-300)",
        borderRadius: "1rem",
        paddingTop: "4.8125rem",
        paddingLeft: "4.9375rem",
        gridArea: "Bg",
      }} />
      <CardSection />
    </div>
  );
};