import type { JSX } from "react";
import style from "./Menu.module.css";

type MenuItem = {
  label: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

export const Menu = (props: {menuItem: MenuItem[]}) => {
  return (
    <div className={style.main}>
        <ul className={style.list}>
          {props.menuItem.map((item) => (
            <li key={item.label} className={style.item}>
              {item.leftIcon}
              <span>{item.label}</span>
              {item.rightIcon}
            </li>
          ))}
        </ul>
    </div>
  );
};