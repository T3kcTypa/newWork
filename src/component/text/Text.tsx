import s from "./Text.module.css"
import React from "react";

type TextProps = {
  style?: React.CSSProperties
  children: React.ReactNode
}

export const Text = ({ children, style }: TextProps) => {
  return (
    <div className={s.text} style={style}>
      <p>{children}</p>
    </div>
  );
};