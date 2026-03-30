import React from "react";
import s from "./button.module.css";

type ButtonProps = {
  style?: React.CSSProperties
  children: React.ReactNode
}

export const Button = ({ style, children } : ButtonProps) => {
  return (
    <button style={style} className={s.buttonStyle}>
      {children}
    </button>
  );
};