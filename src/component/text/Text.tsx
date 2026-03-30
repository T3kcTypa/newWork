import s from "./Text.module.css"
import React from "react";

type TextProps = {
  style?: React.CSSProperties
  children: React.ReactNode
}

export const Text = ({ children }: TextProps) => {
  return (
    <div className={s.text}>
      <p>{children}</p>
    </div>
  );
};