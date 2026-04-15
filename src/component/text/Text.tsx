import s from "./Text.module.css"
import React from "react";

type TextProps = {
  style?: React.CSSProperties
  children: React.ReactNode
  variant?: "instock" | "outstock"
}

export const Text = ({ children, style, variant = 'instock' }: TextProps) => {
  return (
    <div className={`${s.text} ${s[variant]}`} style={style}>
      <p>{children}</p>
    </div>
  );
};